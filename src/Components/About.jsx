import Skills from './Skills'
// import './About.css'


const About = () => {
  return (
    <>
      <div className="flex items-center justify-center text-black h-screen">
      <div className="flex flex-col items-center justify-center text-center p-4">
        <h1 className='font-bold text-2xl'>About Me</h1>
        <Skills />
        <div className='mt-4 flex flex-col text-center lg:px-20 md:px-20 sm:p-4'>
          <p>
            Hi there! I&apos;m Tejas Kumbhar, a passionate web developer with a love for creating beautiful and functional websites. I have a strong foundation in web technologies and bring a wide range of skills to the table.
          </p>
          <p>
            My journey in web development began with a fascination for creating visually appealing and user-friendly interfaces. I take pride in my ability to turn ideas into dynamic and responsive web applications that offer exceptional user experiences.
          </p>
          <p>
            I&apos;m always excited to take on new challenges and work collaboratively to bring ideas to life. If you&apos;d like to discuss a project or collaborate, don&apos;t hesitate to get in touch.
          </p>
          <p>
            Let&apos;s build something amazing!
          </p>
        </div>
      </div>
    </div>
    </>    
  )
}

export default About
