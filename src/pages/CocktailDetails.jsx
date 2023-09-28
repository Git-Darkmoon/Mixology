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
      <h1>{name}</h1>
      <img src={image} alt="" />
      <h3>{info}</h3>
      <h5>{category}</h5>
      <h6>{glass}</h6>
    </main>
  )
}
export default CocktailDetails
