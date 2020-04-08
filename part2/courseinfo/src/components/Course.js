import React from 'react'

const Header = ({name}) => (
    <div>
        <h1>{name}</h1>
    </div>
)

const Part = ({part}) => (
    <div>
        <p>
            {part.name} {part.exercises}
        </p>
    </div>
)

const Content = ({parts}) => (
    <div>
        {parts.map(part =>
            <Part key={part.id} part={part}/>
        )}
    </div>
)

const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <div>
            <b>total of {total} exercises</b>
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course