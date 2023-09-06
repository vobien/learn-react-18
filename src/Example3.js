import { useState } from "react"

const genders = [
    {
        id: 1,
        value: "male"
    },
    {
        id: 2,
        value: "female"
    },
    {
        id: 3,
        value: "none above"
    },
]

const courses = [
    {
        id: 1,
        name: "html"
    },
    {
        id: 2,
        name: "java"
    },
    {
        id: 3,
        name: "python"
    },
]

function Example3() {

    const [genderId, setGenderId] = useState(1)
    const [courseIds, setCourseIds] = useState([])
    
    const handleGenderChecked = (id) => {
        setGenderId(id)
    }

    const handleCourseChecked = (id) => {
        if (!courseIds.includes(id)) {
            setCourseIds(prev => ([
                ...prev,
                id
            ]))
        } else {
            const remainingChecked = courseIds.filter(courseId => courseId !== id)
            setCourseIds(remainingChecked)
        }
    }
    
    const handleSubmit = () => {
        console.log({
            genderId,
            courseIds
        })
    }

    return (
        <div>
            <div style={{'padding': '4px'}}>
                <h2> Pick Gender</h2>
                {genders.map((gender) => (
                    <div key={gender.id}>
                        <input type="radio"
                            checked={gender.id === genderId}
                            onChange={() => handleGenderChecked(gender.id)}
                        /> 
                        {gender.value}
                    </div>
                ))}

                <h2> Pick Courses </h2>
                {
                    courses.map((course) => 
                        <div key={course.id}>
                            <input type="checkbox"
                                checked={courseIds.includes(course.id)}
                                onChange={() => handleCourseChecked(course.id)}
                            /> 
                            {course.name}
                        </div>
                    )
                }

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Example3