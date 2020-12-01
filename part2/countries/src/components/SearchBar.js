import React from 'react'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ search, searchName }) => {
  return (
    <form>
      <div>
        find countries <input value={search} onChange={searchName} />
      </div>
    </form>
  )
}

export default SearchBar
