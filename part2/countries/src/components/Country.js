/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  const [temp, setTemp] = useState()
  const [wind, setWind] = useState()
  const [windDir, setWindDir] = useState('')

  const apikey = process.env.REACT_APP_API_KEY
  const query = `http://api.weatherstack.com/current?access_key=${apikey}&query=${country.capital}`
  const hook = () => {
    axios.get(query).then((response) => {
      setTemp(response.data.current.temperature)
      setWind(response.data.current.wind_speed)
      setWindDir(response.data.current.wind_dir)
    })
  }
  useEffect(hook, [])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img alt="flag" src={country.flag} width="10%" height="auto" />
      <h2>Weather in {country.capital}</h2>
      <p>
        <strong>temperature:</strong> {temp} Celsius
      </p>
      <p>
        <strong>wind:</strong> {wind} mph direction {windDir}
      </p>
    </div>
  )
}
export default Country
