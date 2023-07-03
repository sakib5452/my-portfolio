import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import ContactForm from "../Pages/Contact/ContactFrom";
import Projects from "../Pages/Projects/Projects";
import NotFound from "../Pages/NotFound/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/contact",
                element: <ContactForm></ContactForm>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);