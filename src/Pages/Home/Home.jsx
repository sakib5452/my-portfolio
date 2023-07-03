import About from "../About/About";
import ContactForm from "../Contact/ContactFrom";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import TechStack from "../TechStack/TechStack";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <TechStack></TechStack>
            <Services></Services>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;