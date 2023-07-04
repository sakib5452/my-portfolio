import { Link } from "react-router-dom";
import Typical from "react-typical";
import header from '../../assets/landing-page-illustration.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="b">
            <main
                className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
                id="/"
            >
                <div className="sm:text-center mt-40 lg:text-left">
                    <h1 className="text-4xl tracking-tight font-bold lg:font-extrabold text-gray-900 sm:text-5xl md:text-6xl">

                        Hi, I am Najmul Sakib

                        <span className="block text-purple-400 z-0 lg:inline">
                            <Typical className="mt-5"
                                steps={[
                                    "Front End Developer",
                                    900,
                                    "Full Stack Developer",
                                    900,
                                ]}
                                loop={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="pt-5"
                    >
                        I am a Front-End / Full-Stack Developer. I am currently working at
                        CloudStok Technologies as a Front-End Developer
                    </p>
                    <div className="flex md:justify-start ">


                    </div>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                            <Link to='/contact' className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-400 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                                Hire Me
                            </Link>
                        </div>
                    </div>

                </div>
                <img src={header} alt="" className="h-1/2 w-1/2" />
            </main>
        </div>
    );
};

export default Header;