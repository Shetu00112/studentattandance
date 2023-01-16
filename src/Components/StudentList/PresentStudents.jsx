import React from 'react'

const PresentStudents = (props) => {
    const { data, Accident } = props

    return (
        <>
            <div className="Present-Students">
                <h1>Present-Students</h1>
                {data
                    .filter((Student) => Student.isPresent === true)
                    .map((item) => (
                        <li>
                            <span>{item.title}</span>
                            <button onClick={() => Accident(item.id)}>
                                Accidentally Added
                            </button>
                        </li>
                    ))}
            </div>
        </>
    )
}

export default PresentStudents
