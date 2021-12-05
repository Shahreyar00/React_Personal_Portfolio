import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29219.976986242058!2d85.48479057046198!3d23.729645701889677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f48c93a1615bad%3A0xed15309e07b4f926!2sKuju%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1638551324540!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8377892081'} title={'Mobile'}/>
                    <ContactItem icon={email} text1={'shahreyar10.13@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Kuju, Ramgarh, Jharkhand'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
