import { Link } from "react-router-dom"
import not_found from "../assets/not_found.svg"

function Error() {
  return (
    <main className="notFound_container">
      <img src={not_found} alt="Error not found." />
      <h3>Could not find what you were looking for ...</h3>
      <Link to={"/"} className="errorBtn">
        Go Back Home
      </Link>
    </main>
  )
}
export default Error
