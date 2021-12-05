import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML/CSS'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Javascript'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'React'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MongoDB'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Next.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'C++'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Python'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MySQL'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/UX (Figma)'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Tensorflow'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'OpenCV'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Pandas'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Matplotlib'} progress={'80%'} width={'80%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Full stack Web Development'} 
                text={'Website/WebApp for your portfolio or business Using Reactjs or Nextjs with Nodejs and MongoDB.'}
                />
                <ServicesSection image={intelligence} title={'AI / ML'} 
                text={'Stand alone Deep learning models or models integrated with OpenCV. For example, mediapipe library integrated with OpenCV for gesture control implementations.'}
                />
            </div>

        </div>
    )
}

export default AboutPage;
