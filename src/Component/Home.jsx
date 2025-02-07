import AboutMe from './Section/AboutMe';
import ContactSection from './Section/ContactSection';
import HeroSection from './Section/HeroSection';
import Project from './Section/Project';
import SkillEducation from './Section/SkillEducation';


const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <AboutMe></AboutMe>
            <SkillEducation></SkillEducation>
            <Project id="project"></Project>
            <ContactSection></ContactSection>
        </>
    );
};

export default Home;