import React from 'react';
// import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img src={about} alt=""/>
            </div> */}
            <div className="about-info">
                <h4>I am<span> Shahreyar Arif</span></h4>
                <p className="about-text">
                    I am a final year engineering student majoring in Computer Science & Engineering. 
                    Currently I am working as a freelancer in the field of full stack web development.
                    Concurrently I am also working on projects in the field of deep learning and computer vision.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>University</p>
                        <p>Verification</p>
                    </div>
                    <div className="right-section">
                        <p>: Md Shahreyar Arif</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English, Hindi</p>
                        <p>: Kuju, Ramgarh, Jharkhand, India</p>
                        <p>: Guru Gobind Singh Indraprastha University</p>
                        <p>: <a href="https://ipuranklist.com/student/40918002718" target="_blank" rel="noopener noreferrer">Checkout Ranklist (Click Me)</a></p>
                    </div>
                </div>
                <button className="btn"><a href="https://drive.google.com/file/d/1j2piwWU13ZWoO1GIaf4fzzBraFjv9Ssi/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></button>
            </div>
        </div>
    )
}

export default ImageSection;
