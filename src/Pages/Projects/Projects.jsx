/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import pic from '../../assets/pic.jpg'
import pic1 from '../../assets/pic2.jpg'
import pic2 from '../../assets/pic1.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic6.jpg'
import pic5 from '../../assets/pic5.jpg'

const Projects = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        Projects
                    </h2>

                </div>
                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-2 grid-cols-1">
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <img
                                        src={pic}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src={pic1}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-bold leading-5">
                                        Najmus Sport Academies (Summer Camp School Website)
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        An instructor can add classes of his choice. But an admin will approve or deny. If approved then it will be added to
                                        the classes page and students can select it.
                                        And after the students select it will be added to the my selected page of the student dashboard and then the
                                        student will make the payment.
                                        Admin can make anyone an instructor if he wants. Instructors can then update their classes and students can
                                        view their payment history
                                    </p>
                                </div>
                                <div className='ml-5 mb-5'>
                                    <Link target='_blank' className='text-purple-400 font-bold' to="https://najmus-sports-academies.web.app/">Live Site</Link>
                                    <Link target='_blank' className='text-purple-400 ml-4 font-bold' to="https://github.com/sakib5452/najmus-sports-academies-server-site">Server Site</Link>
                                    <Link target='_blank' className='text-purple-400 ml-4 font-bold' to="https://github.com/sakib5452/najmus-sports-academies-client-site">Client Site</Link>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <img
                                        src={pic3}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src={pic2}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-bold leading-5">
                                        CHEF (Chef Recipe Hunter Website)
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        When a user clicks on a chef's View Recipes button, he/she will be redirected to the Chef Recipes page.
                                        When clicking on the favorite button, a toast message will be shown and disable the button.
                                        The Chef Recipe page is a private/protected page. If you reload the secure/private route (after login), this page
                                        will not redirect the user to the login page. Instead, it will place the logged-in user in secure root.
                                    </p>
                                </div>
                                <div className='ml-5 mb-5'>
                                    <Link target='_blank' className='text-purple-400 font-bold' to="https://chef-auth-a4eea.web.app/chef">Live Site</Link>
                                    <Link target='_blank' className='text-purple-400 ml-4 font-bold' to="https://github.com/sakib5452/chef">Server Site</Link>
                                    <Link target='_blank' className='text-purple-400 ml-4 font-bold' to="https://github.com/sakib5452/chef-client-site">Client Site</Link>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a
                        aria-label="View Item"
                        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                    >
                        <div className="flex flex-col h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div>
                                    <img
                                        src={pic4}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <img
                                        src={pic5}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex-grow border border-t-0 rounded-b">
                                <div className="p-5">
                                    <h6 className="mb-2 font-bold leading-5">
                                        ROBOT GALAXY (Toy Marketplace website)
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        An All Toys page where you can see the toys added by all users in a tabular form.
                                        Without logging in, if a user clicks the View Details button, they will be redirected to the login page.
                                        Add A Toy page will be a private route User can add toys on this page.
                                        My Toys page will be the private route If a user logs in, they will see the My Toys page, which will show all the
                                        information about the toys added from the Add a Toy page in a tabular form. Each row will have an Update and
                                        Delete button.
                                    </p>
                                </div>
                                <div className='ml-5 mb-5'>
                                    <Link target='_blank' className='text-purple-400 font-bold' to="https://robot-galaxy-auth.web.app/">Live Site</Link>
                                    <Link target='_blank' className='text-purple-400 ml-4 font-bold' to="https://github.com/sakib5452/robot-galaxy-server-site">Server Site</Link>
                                    <Link target='_blank' className='text-purple-400 ml-4 font-bold' to="https://github.com/sakib5452/robot-galaxy-client-site">Client Site</Link>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;