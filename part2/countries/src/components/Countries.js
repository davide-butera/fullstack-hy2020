import React from 'react'
import Country from './Country'

const Countries = ({ countries, search, setSearch }) => {
  const countriesToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  )

  if (countriesToShow.length >= 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countriesToShow.length < 10 && countriesToShow.length > 1) {
    return (
      <div>
        <ul>
          {countriesToShow.map((country) => (
            <li key={country.name}>
              {country.name}
              <button
                type="button"
                onClick={() => {
                  setSearch(country.name)
                }}
              >
                show
              </button>
            </li>
          ))}{' '}
        </ul>
      </div>
    )
  }

  return countriesToShow.map((country) => (
    <Country key={country.name} country={country} />
  ))
}

export default Countries
