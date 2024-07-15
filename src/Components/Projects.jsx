import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { projectsData } from "./projectsdata"

const Projects = () => {
  return (
    <>
        <div className="flex">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">projectsData</h1>
                <div className="w-full p-5 mx-2 rounded">
                {
                    projectsData.map((project, index) => (
                    <div className="border-2 border-gray-500 p-4 m-1" key={index}>
                        <h1 className="font-bold underline">Project title:</h1>
                        {project.title}
                        <h3 className="font-bold underline">Tehchnologies used: </h3>
                        <div className="flex flex-wrap">
                            {
                                project.tech.map((t,i) => (
                                    <div key={i}>
                                        <h3 className="p-1 m-1 text-center bg-violet-600 text-white rounded w-auto">{t}</h3>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <h3 className="font-bold underline">Description: </h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="flex m-2 items-center justify-center">
                            Github repo:&nbsp;
                            <Link to={project.url} target="_blank">
                                <FaGithub size={30}/>
                            </Link>
                        </div>
                    </div>
                    ))
                }
            </div>
            </div>
        </div>
    </>
  )
}

export default Projects