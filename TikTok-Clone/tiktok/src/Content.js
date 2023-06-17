import { useState, useEffect } from "react";

const courses = [
    {
        id: 1,
        name: 'HTML, CSS cơ bản'
    },
    {
        id: 2,
        name: 'Javascript cơ bản'
    },
    {
        id: 3,
        name: 'ReactJS cơ bản'
    }
]

function Content() {
    
    const [selectedId, setSelectedId] = useState(1);

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${selectedId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${selectedId}`, handleComment);
        }

    }, [selectedId])

    return (
        <div>
            <ul>
                {courses.map(course => 
                    (
                        <li 
                            key={course.id}
                            style={
                                {color: selectedId === course.id ? 'red' : '#333'}
                            }
                            onClick={() => setSelectedId(course.id)}
                        >{course.name}</li>
                    )
                )}
            </ul>
        </div>
    )
}
export default Content;
