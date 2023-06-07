import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="flex items-center justify-center md:min-h-screen bg-[#fcfcfc]">
            <div className="container mb-10 mt-10 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div data-aos="fade-left" className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
                    <p className="text-gray-500">Sign in to access your account</p>
                </div>

                <div className="m-6">
                    <form className="mb-4">
                        <div data-aos="fade-right" className="mb-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Your email address" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div data-aos="fade-left" className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="Your password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                                <p className='absolute bottom-3 right-3 cursor-pointer' onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash /> : <FaEye />
                                    }
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-right" className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-blue-600 rounded-md hover:bg-blue-700  focus:outline-none duration-100 ease-in-out">Sign in</button>
                        </div>
                        <p data-aos="fade-left" className="text-sm text-center text-gray-400">
                            Don&#x27;t have an account yet?
                            <Link to='/signUp' className="font-semibold text-blue-600 focus:text-blue-600 focus:outline-none focus:underline">Sign up</Link>.
                        </p>
                    </form>

                    <div data-aos="fade-left" className="flex flex-row justify-center mb-8">
                        <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
                        <div className="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>

                    <div data-aos="fade-left" className="flex justify-center ">
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-10 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;