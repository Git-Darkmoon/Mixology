import { useQuery } from "@tanstack/react-query"
import { useLoaderData } from "react-router-dom"

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const response = await fetch(`${singleCocktailUrl}${id}`)
      const data = response.json()
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params

    await queryClient.ensureQueryData(singleCocktailQuery(id))

    return { id }
  }

function CocktailDetails() {
  const { id } = useLoaderData()
  const { data, isLoading, isError } = useQuery(singleCocktailQuery(id))

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h3>Something happened...</h3>
  }

  const myCocktail = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: alcoholic,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = myCocktail

  const cocktailKeys = Object.keys(myCocktail)

  const validIngredientsKeys = cocktailKeys.filter((key) => {
    return key.startsWith("strIngredient") && myCocktail[key] !== null
  })

  const validIngredients = validIngredientsKeys.map((ingredientKey) => {
    return myCocktail[ingredientKey]
  })

  return (
    <main className="container">
      <section className="cocktail_details">
        <picture>
          <img className="cocktail_details__img" src={image} alt={name} />
        </picture>
        <article className="cocktail_details__info">
          <h1 className="cocktail_details__name">{name}</h1>
          <p className="cocktail_details__instructions">{instructions}</p>
          <div className="cocktail_details__serving">
            <div className="cocktail_details__alcoholic detailsCard">
              <h4 className="details_label">Contains 🍸</h4>
              <h4 className="details_content">{alcoholic}</h4>
            </div>
            <div className="cocktail_details__category detailsCard">
              <h4 className="details_label">Category 🦄</h4>
              <h4 className="details_content">{category}</h4>
            </div>
            <div className="cocktail_details__glass detailsCard">
              <h4 className="details_label">Glass 🥂</h4>
              <h4 className="details_content">{glass}</h4>
            </div>
          </div>
          <ul className="cocktail_details__ingredients">
            {validIngredients.map((ingredient) => {
              return <li key={crypto.randomUUID()}>{ingredient}</li>
            })}
          </ul>
        </article>
      </section>
    </main>
  )
}
export default CocktailDetails
