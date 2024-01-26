import React from 'react'

const Aboutme = ({setActiveNavbar}) => {
  return (
    <section id='AboutME' onMouseEnter={()=>setActiveNavbar("AboutME")}>
        <div id='AboutMEContainer'>
            <h2>About Me</h2>
            {/* <p>I'm a Front End Developer from Delhi,India.Currently, I enrolled in BCA-hons Course at Vivekananda Institute of Professional Studies of Guru Gobind Singh Indraprastha University. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always. </p> */}
            <p>I'm a passionate Full Stack Developer currently pursuing my BCA-hons. I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always." and i know about MERN stack, Sass, HTML, CSS, JS and Git and Github</p>
        </div>
    </section>
  )
}

export default Aboutme