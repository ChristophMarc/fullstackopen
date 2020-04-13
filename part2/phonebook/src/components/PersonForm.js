import React from 'react'

const PersonForm = ({name, handleNameChange, number, handleNumberChange, onSubmit}) => (
    <form onSubmit={onSubmit}>
        <div>name: <input value={name} onChange={handleNameChange}/></div>
        <div>number: <input value={number} onChange={handleNumberChange}/></div>
        <div>
            <button type="submit"> add</button>
        </div>
    </form>
)

export default PersonForm