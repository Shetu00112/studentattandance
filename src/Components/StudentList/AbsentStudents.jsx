import React from 'react'

const AbsentStudents = (props) => {
    const { data, Accident } = props
    return (
        <>
            <div className="Absent-Students">
                <h1>Action-Students</h1>
                {data
                    .filter((Student) => Student.isPresent === false)
                    .map((item) => (
                        <li>
                            <span> {item.title}</span>
                            <button onClick={() => Accident(item.id)}>
                                Accidentally Added
                            </button>
                        </li>
                    ))}
            </div>
        </>
    )
}

export default AbsentStudents
