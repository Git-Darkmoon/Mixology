import { useQuery } from "@tanstack/react-query"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
import { useLoaderData } from "react-router-dom"
import {
  classicCocktails,
  modernCocktails,
  tropicalCocktails,
  otherCocktails,
} from "../orbitCocktails"

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await fetch(`${cocktailSearchUrl}${searchTerm}`)
      const data = await response.json()
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)

    const searchTerm = url.searchParams.get("search") || ""

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

    return { searchTerm }
  }

function Landing() {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <main className="container">
      <section className="landing">
        <div className="orbit">
          <ul className="orbit-wrap">
            <li className="orbit-center">
              <i className="orbit-center__icon "></i>
            </li>

            <li>
              <ul className="ring-0">
                {otherCocktails.map((classic) => {
                  return (
                    <li key={crypto.randomUUID()}>
                      <i className="orbit-icon">{classic}</i>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <ul className="ring-1">
                {classicCocktails.map((classic) => {
                  return (
                    <li key={crypto.randomUUID()}>
                      <i className="orbit-icon">{classic}</i>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <ul className="ring-2">
                {modernCocktails.map((modern) => {
                  return (
                    <li key={crypto.randomUUID()}>
                      <i className="orbit-icon">{modern}</i>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <ul className="ring-3">
                {tropicalCocktails.map((tropical) => {
                  return (
                    <li key={crypto.randomUUID()}>
                      <i className="orbit-icon">{tropical}</i>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </div>
        <article className="info-content">
          <h1>Discover Your New Poison</h1>
          <p>
            Welcome to Mixology! Your journey to finding the perfect
            thirst-quenching concoction starts now. Engulf yourself in our
            selection of tantalizing, potent, and at times outright bizarre
            libations that will leave you asking, &quot;Why didn&apos;t I find
            this sooner?&quot;
          </p>
        </article>
      </section>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </main>
  )
}
export default Landing
