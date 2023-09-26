import { Link } from "react-router-dom"

function CocktailCard({ id, name, image }) {
  return (
    <article className="cocktail-card">
      <h1 className="cocktail-name">{name}</h1>
      <img src={image} alt={name} />
      <Link to={`/cocktail/${id}`} className="cocktail-btn">
        details
      </Link>
    </article>
  )
}
export default CocktailCard
