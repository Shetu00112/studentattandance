import React from 'react'
import AllStudents from './StudentList/AllStudents'
import PresentStudents from './StudentList/PresentStudents'
import AbsentStudents from './StudentList/AbsentStudents'

const StudentSection = (props) => {
    const { data, setData, setEditable, setIsEditable, setStudentName } = props

    const Accident = (id) => {
        const Accidentally = data.find((item) => item.id === id)
        Accidentally.isPresent = !Accidentally.isPresent
        setData([...data])
    }
    return (
        <>
            <div className="Student-Section">
                <AllStudents
                    setStudentName={setStudentName}
                    data={data}
                    setData={setData}
                    setIsEditable={setIsEditable}
                    setEditable={setEditable}
                />
                <PresentStudents data={data} Accident={Accident} />
                <AbsentStudents data={data} Accident={Accident} />
            </div>
        </>
    )
}

export default StudentSection
