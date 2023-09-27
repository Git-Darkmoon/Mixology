import { Link } from "react-router-dom"

function CocktailCard({ id, name, image }) {
  return (
    <article className="cocktail-card">
      <picture>
        <img src={image} alt={name} className="cocktail-image" />
      </picture>
      <Link to={`/cocktail/${id}`} className="cocktail-btn">
        Details
      </Link>
      <h1 className="cocktail-name">{name}</h1>
    </article>
  )
}
export default CocktailCard
