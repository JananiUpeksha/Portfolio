import './index.css';  // Ensure this line exists in your main entry file.
import { BrowserRouter as Router } from 'react-router-dom';
import  HeroMain from "./components/heroSection/HeroMain"
import  HeroGradient from "./components/heroSection/HeroGradient"
import SkillMain from "./components/skillsSection/SkillMain"
import AboutMe from "./components/aboutMe/AboutMe"
import ProjectMain from "./components/projectsSection/ProjectsMain"
import ContactForm from "./components/contactForm/ContactForm"



function App() {
    return (
        <Router>
            <main className="font-body text-white relative overflow-hidden">
                <HeroMain/>
                <HeroGradient />
                <AboutMe/>
                <SkillMain />
                <ProjectMain/>
                <ContactForm />

            </main>
        </Router>
    );
}

export default App;
