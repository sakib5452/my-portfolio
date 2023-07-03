/* eslint-disable react/no-unescaped-entities */
import img from '../../assets/28056680_601088656908656_6279208608158202408_n.jpg'

const About = () => {
    return (
        <div className="mt-16 lg:ml-44 lg:mr-44">
            <h2 className=" text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About Me
            </h2>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 -right-36 z-0 w-full max-w-xl lg:mt-20 lg:ml-40 px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">

                    <img
                        className="object-cover   rounded-full shadow-lg lg:rounded-full lg:shadow-none md:h-96 lg:h-96 w-96"
                        src={img}
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">

                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            I'm a self-taught web developer  with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;