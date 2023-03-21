import React from 'react'
import Person from './Person'

function list({people}) {
  return (
      <section>{people.map((person) => {
        return  <Person key={person.id} person={person} />
    })}</section>
  )
}

export default list;