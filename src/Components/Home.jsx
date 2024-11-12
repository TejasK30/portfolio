import { Link } from "react-router-dom"
import Skills from "./Skills"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Home = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center p-4">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Hello world !! 👋 </h1>
          <h1 className="font-bold text-xl">I&apos;m Tejas Kumbhar</h1>
          <h2 className="font-medium text-xl">
            Passionate Full Stack Mern Developer from India.{" "}
          </h2>
          <Skills />
          <div className="flex mt-2 items-center justify-center p-3">
            <Link to={"https://github.com/TejasK30"} target="_blank">
              <FaGithub size={30} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/tejaskumbhar30/"}
              target="_blank"
            >
              <FaLinkedin size={30} color="#0077b9" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
