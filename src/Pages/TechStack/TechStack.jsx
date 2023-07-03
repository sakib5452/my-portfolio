/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import { techStack } from "../../TeachStack";

const TechStack = () => {
    return (
        <div>
            <h2 className=" text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Technologies and Tools
            </h2>
            <p></p>
            <motion.div className="grid grid-cols-2 gap-5 lg:grid-cols-5 lg:ml-28 lg:mr-28 mt-8 justify-between ">
                {techStack.map((el) => (
                    <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                        className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                    >
                        <img alt="" src={el.link} className="w-12" />
                        <h4 className="text-md ml-4">{el.name}</h4>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStack;