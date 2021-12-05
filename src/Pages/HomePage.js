import React from 'react';
import {faFacebook, faInstagram, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Shahreyar Arif.</span>
                </h1>
                <p className="h-sub-text">
                    I am a student, full-stack web developer and a UI/UX designer. 
                    I can make you a fully functional website or 
                    web app for your personal use or your business in minimum time possible. 
                    I can also build some Deeplearning computer vision projects using Tensorflow and OpenCV.
                </p>
                <div className="icons">
                    <a href="https://github.com/Shahreyar00" target="_blank" rel="noopener noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gt" />
                    </a>
                    <a href="https://www.linkedin.com/in/md-shahreyar-arif-278b541b8/" target="_blank" rel="noopener noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
