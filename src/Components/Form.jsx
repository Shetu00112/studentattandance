import React from 'react'

const Form = (props) => {
    const {
        StudentName,
        setStudentName,
        data,
        setData,
        isEditable,
        setIsEditable,
        Editable,
        setEditable,
    } = props
    const Add = (e) => {
        e.preventDefault()
        const record = {
            title: StudentName,
            id: Date.now(),
        }
        setData([...data, record])
        setStudentName('')
    }
    const Update = (e) => {
        e.preventDefault()
        Editable.title = StudentName || Editable.title
        setStudentName('')
        setEditable(null)
        setIsEditable(false)
    }
    return (
        <>
            <form action="">
                <input
                    type="text"
                    name=""
                    id=""
                    value={StudentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <button
                    onClick={(e) => {
                        isEditable === true ? Update(e) : Add(e)
                    }} className="Add">
                    {isEditable === true ? 'Update' : 'Add'}
                </button>
            </form>
        </>
    )
}
export default Form
