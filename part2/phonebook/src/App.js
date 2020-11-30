/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

  const addName = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName) !== undefined) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const noteObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(noteObject))
      setNewName("")
      setNewNumber("")
    }
  }

  // eslint-disable-next-line no-shadow
  const contactsToShow =
    search === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )

  const searchName = (event) => {
    setSearch(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ search, searchName, addName }} />
      <h2>add a new</h2>

      <PersonForm
        {...{
          newName,
          handleNameChange,
          newNumber,
          handleNumberChange,
          addName,
        }}
      />
      <Persons {...{ contactsToShow }} />
    </div>
  )
}

export default App
