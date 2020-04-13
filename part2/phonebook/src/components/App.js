import React, {useState} from 'react'
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const submitName = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            window.alert(`${newName} is already added to the phonebook`)
        } else {
            const person = {name: newName, number: newNumber}
            setPersons(persons.concat(person))
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterText={filter} onChange={handleFilterChange}/>
            <h2>Add</h2>
            <PersonForm name={newName} handleNameChange={handleNameChange} number={newNumber}
                        handleNumberChange={handleNumberChange} onSubmit={submitName}/>
            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

export default App