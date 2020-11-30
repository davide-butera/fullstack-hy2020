/* eslint-disable react/prop-types */
import React from "react"
import Person from "./Person"

const Persons = ({ contactsToShow }) => {
  return (
    <ul>
      {contactsToShow.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </ul>
  )
}

export default Persons
