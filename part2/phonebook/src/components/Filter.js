import React from 'react'

const Filter = ({filterText, onChange}) => (
    <div>filter with: <input value={filterText} onChange={onChange}/></div>
)

export default Filter