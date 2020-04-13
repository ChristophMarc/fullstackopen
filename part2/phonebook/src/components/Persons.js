import React from 'react'

const Persons = ({persons, filter}) => (
    <ul>
        {persons.filter(person =>
            person.name.toUpperCase().includes(filter.toUpperCase())
        ).map(person =>
            <li key={person.name}> {person.name} {person.number} </li>
        )}
    </ul>
)

export default Persons