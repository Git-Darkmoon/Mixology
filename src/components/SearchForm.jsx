import { Form } from "react-router-dom"

function SearchForm({ searchTerm }) {
  return (
    <Form className="search-form">
      <input
        type="search"
        name="search"
        id="searchTerm"
        defaultValue={searchTerm}
        autoComplete="off"
        required
      />
      <button type="submit" required>
        Search
      </button>
    </Form>
  )
}
export default SearchForm
