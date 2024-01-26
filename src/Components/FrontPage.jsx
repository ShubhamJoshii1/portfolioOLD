import React from 'react';

import { RiExternalLinkFill } from "react-icons/ri";
import FrontShubhamDP from "../Assets/FrontDPImg.png"

import Github from "../Assets/Github.png"
import Instagram from "../Assets/Instagram.png"
import Linkedin from "../Assets/LinkedIn.png"
import Header from './Header';
import DownArrow from "../Assets/Arrowdown.gif"
import Typewriter from "typewriter-effect";
const FrontPage = ({ activeNavbar, setActiveNavbar }) => {
    return (
        <section id="FrontPage">
            <Header activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
            <div id="FrontPageContainer" className='Pages' onMouseEnter={() => setActiveNavbar("Home")}>
                <a href='#AboutME'>
                    <img src={DownArrow} alt='ScrollDown' rel="noreferrer" id='arrowDown' />
                </a>
                <div id='firstHalf'>
                    <h2>Hi there! I'm</h2>
                    <h3>
                        {/* SHUBHAM JOSHI */}
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 200,
                                strings: ["Shubham Joshi", "Web Developer"]
                            }}
                        />
                    </h3>
                    <p>A Full-Stack Web Developer passionate about creating <br />interactive application and experiences on the web</p>
                    <div id='btns'>
                        <a href='https://github.com/ShubhamJoshii' target='_blank' rel="noreferrer">GITHUB<RiExternalLinkFill /></a>
                        <a href='https://drive.google.com/file/d/1OAwXRB0uOjNZfg6_fUy13CsZoYmFEyaD/view?usp=sharing' rel="noreferrer" target='_blank'>DOWNLOAD RESUME</a>
                    </div>
                    <div id='checkMeOut'>
                        <p>Check me out</p>
                        <div>
                            <a href="https://github.com/ShubhamJoshii" target='_blank' rel='noreferrer'>
                                <img src={Github} alt='socialMedias' />
                            </a>
                            <a href="https://www.instagram.com/invites/contact/?i=1k3g7gxwflgz0&utm_content=2of27u2" target='_blank' rel='noreferrer'>
                                <img src={Instagram} alt='socialMedias' />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-joshi-86aaa6232" target='_blank' rel='noreferrer'>
                                <img src={Linkedin} alt='socialMedias' />
                            </a>
                        </div>
                    </div>
                </div>
                <img src={FrontShubhamDP} alt="MYDP" id='secondHalf' />
            </div>
            <p id='sideMail'>shubhamjoshii676@gmail.com</p>
        </section>
    )
}


export default FrontPage