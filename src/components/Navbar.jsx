import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Mixology</div>
      <ul className="nav-links">
        <NavLink to={"/"} className={"nav-link"}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={"nav-link"}>
          About
        </NavLink>
      </ul>
    </nav>
  )
}
export default Navbar
