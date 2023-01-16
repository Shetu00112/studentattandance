import React from 'react'

const AllStudents = (props) => {
    const { data, setData, setIsEditable, setEditable, setStudentName } = props
    const Edit = (id) => {
        const toBeEdit = data.find((item) => item.id === id)
        setIsEditable(true)
        setEditable(toBeEdit)
        setStudentName(toBeEdit.title)
    }
    const Delete = (id) => {
        const DeleteItem = data.filter((item) => item.id !== id)
        setData(DeleteItem)
    }
    const PresentHandler = (id) => {
        const Student = data.find((item) => item.id === id)
        if (Student.isPresent === undefined) {
            Student.isPresent = true
            setData([...data])
        } else if (Student.isPresent === true) {
            alert('Already Present')
        } else if (Student.isPresent === false) {
            alert('Already present')
        }
    }
    const AbsentHandler = (id) => {
        const Student = data.find((item) => item.id === id)
        if (Student.isPresent === undefined) {
            Student.isPresent = false
            setData([...data])
        } else if (Student.isPresent === false) {
            alert('already present')
        } else if (Student.isPresent === true) {
            alert('already present')
        }
    }
    return (
        <>
            <div>
                <h1>All Students</h1>
                {data.map((item) => (
                    <ul>
                        <li>
                            <span>{item.title}</span>
                            <button
                                onClick={() => {
                                    Edit(item.id)
                                }}>
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    Delete(item.id)
                                }}>
                                Delete
                            </button>
                            <button
                                onClick={() => {
                                    PresentHandler(item.id)
                                }}>
                                Present
                            </button>
                            <button
                                onClick={() => {
                                    AbsentHandler(item.id)
                                }}>
                                Absent
                            </button>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default AllStudents
