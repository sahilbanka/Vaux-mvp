import { useAuth } from "hooks/useAuth";
import { useState } from "react"

function ProjectsList() {
    const [projectsList, setProjectsList] = useState([]);

    return (
        <div className='p-8 ml-[90px] bg-[#f6f7f9]'>
            <div className="text-2xl text-black font-semibold">{'Projects'}</div>
            <div>
                {
                    projectsList.map((project) => {
                        return (
                            <div></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsList