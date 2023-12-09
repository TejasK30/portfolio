import Skills from '../Skills/Skills'
import './About.css'


const About = () => {
  return (
    <>
      <div className="about-me-container">
      <div className="about-me-content">
        <h1>About Me</h1>
        <Skills />
        <p style={ {marginTop: '10px'} }>
          Hi there! I'm Tejas Kumbhar, a passionate web developer with a love for creating beautiful and functional websites. I have a strong foundation in web technologies and bring a wide range of skills to the table.
        </p>
        <p>
          My journey in web development began with a fascination for creating visually appealing and user-friendly interfaces. I take pride in my ability to turn ideas into dynamic and responsive web applications that offer exceptional user experiences.
        </p>
        <p>
          I'm always excited to take on new challenges and work collaboratively to bring ideas to life. If you'd like to discuss a project or collaborate, don't hesitate to get in touch.
        </p>
        <p>
          Let's build something amazing!
        </p>
      </div>
    </div>
    </>    
  )
}

export default About
