/* eslint-disable react/prop-types */
import React from 'react'

const Person = ({ name, number }) => (
  <li>
    {name}
    {' '}
    {number}
  </li>
)

export default Person