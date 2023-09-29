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
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    // strInstructions: instructions,
  } = myCocktail

  return (
    <main className="container">
      <section>
        <picture>
          <img className="cocktail_details__img" src={image} alt={name} />
        </picture>
        <article>
          <h1 className="coctail_details__name">{name}</h1>
          <h3 className="cocktail_details__desc">{info}</h3>
          <h5 className="cocktail_details__category">{category}</h5>
          <h6 className="cocktail_details__glass">{glass}</h6>
        </article>
      </section>
    </main>
  )
}
export default CocktailDetails
