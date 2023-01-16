import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import StudentSection from './Components/StudentSection'

const App = () => {
    const [StudentName, setStudentName] = useState('')
    const [data, setData] = useState([])
    const [isEditable, setIsEditable] = useState(false)
    const [Editable, setEditable] = useState(null)

    return (
        <>
        <h1 className='Title'>Student Attendance System</h1>
            <Form
                StudentName={StudentName}
                setStudentName={setStudentName}
                data={data}
                setData={setData}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                Editable={Editable}
                setEditable={setEditable}
            />
            <StudentSection
                StudentName={StudentName}
                setStudentName={setStudentName}
                data={data}
                setData={setData}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                Editable={Editable}
                setEditable={setEditable}
            />
          
        </>
    )
}

export default App
