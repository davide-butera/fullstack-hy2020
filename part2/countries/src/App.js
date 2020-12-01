import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }

  useEffect(hook, [])

  const searchName = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Filter {...{ search, searchName }} />
      <Countries {...{ countries, search, setSearch }} />
    </div>
  )
}

export default App
