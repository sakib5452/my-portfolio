/* eslint-disable react/no-unescaped-entities */

const ContactForm = () => {

    return (
        <div
            id="contact"

        >
            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
                <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
                    Contact
                </h2>
                <div>
                    <h4 className="mt-12 text-3xl font-semibold text-purple-400">
                        Connect with me
                    </h4>
                    <p className="text-gray-500 text-xl">
                        If you want to know more about me or my work, or if you would just
                        <br />
                        like to say hello, send me a message. I'd love to hear from you.
                    </p>
                </div>
                <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
                    <div className="w-full md:pr-8">
                        <form>
                            <div className="my-6">
                                <label
                                    to="name"

                                >
                                    Name
                                </label>
                                <input
                                    type="email"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    to="email"

                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    to='message'
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your message"
                                    required
                                />
                            </div>
                            <div className="flex justify-between ">
                                <div className="underline">
                                    <a href="mailto:aakash.sh858791@gmail.com">
                                        Send me email directly
                                    </a>
                                </div>
                                <button className="bg-purple-400 hover:bg-purple-700 text-white px-4 py-2 w-40 rounded-md ">
                                    <a href="mailto:aakash.sh858791@gmail.com">Submit</a>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">

                        <h1 className="text-3xl font-bold">Email</h1>
                        <a
                            href="hello"
                            className="mb-12 mt-4 font-semibold text-purple-400  block uppercase"
                        >
                            najmus169@gmail.com
                        </a>
                        <h1 className="text-3xl  font-bold">Address</h1>
                        <a
                            href="hello"
                            className="mt-4  mb-12 md:text-right font-semibold text-purple-400 block uppercase"
                        >
                            Dhaka
                            <br />
                            Bangladesh
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm