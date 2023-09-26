import CocktailCard from "./CocktailCard"

function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4>No matching cocktails found...</h4>
  }
  const formattedDrink = drinks.drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <section className="cards-container">
      {formattedDrink.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </section>
  )
}
export default CocktailList
