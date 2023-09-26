function SearchForm() {
  return (
    <form className="search-form">
      <input type="search" name="searchTerm" id="searchTerm" required />
      <button required>Search</button>
    </form>
  )
}
export default SearchForm
