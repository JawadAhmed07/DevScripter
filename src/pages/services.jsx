import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import landingPage from '../Images/landingPage.png';
import airmax from '../Images/airmax.png';
import brothersbond from '../Images/brothersbond.png';
import fluid from '../Images/fluid.png';
import lightup from '../Images/lightup.png';
import monstera from '../Images/monstera.png';
import shery from '../Images/shery.png';
import websitedes from '../Images/websitedes.png';
import websitedesign from '../Images/websitedesign.png';

// import featureImage4 from '../Images/feature4.png';



function Services() {
    return (
        <>
            {/* Main intro section */}
            <section
                style={{ backgroundColor: "#4A7766" }}

                className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
                            Web Designing Service: The Path to Your Online Success
                        </h1>
                        <p className="mb-8 leading-relaxed text-white">
                            Web Design refers to the web design shown on the internet. If talented customers come across your website, you have a few seconds to fulfil your customer’s needs and keep them on your website. When the customers do not find out the information in a minute, they will likely leave your website immediately.
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative w-full lg:w-1/2">
                                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600"></label>
                                <div className="flex items-center bg-gray-100 rounded border border-gray-300">
                                    <EmailIcon className="ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        id="hero-field"
                                        name="hero-field"
                                        className="w-full bg-transparent border-none outline-none text-gray-700 py-1 px-3 leading-8"
                                        placeholder="Your Email Address"
                                    />
                                </div>
                            </div>
                            <button className="inline-flex text-white bg-green-800 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">"Subscribe to our newsletter for the latest updates and special offers."
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" />
                    </div>
                </div>
            </section>
            {/* Pricing section */}
            <section
                style={{ backgroundColor: "#ECE7E2" }}

                className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-blue-900 capitalize">
                            Web service pricing and plan
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                            Choose the perfect plan tailored to your business needs, offering flexibility, security, and expert support for your online presence.
                        </p>
                        {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                                Monthly
                            </button>
                            <button className="py-1 px-4 focus:outline-none">Annually</button>
                        </div> */}
                    </div>
                    <div className="flex cursor-pointer flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full gap-2 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-md  tracking-widest title-font mb-1 font-medium capitalize">
                                    standard plan
                                </h2>
                                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b  border-gray-200 leading-none">
                                    499$
                                </h1>
                                {/* <p className="flex items-center text-gray-600 mb-2">
                                Up to 10 pages website
                                </p> */}
                                <li>Up to 10 pages website</li>
                                <li>Premium theme integration</li>
                                <li>Basic web security setup
                                </li>
                                <li>Basic SEO optimization
                                </li>
                                <li>Functional website</li>
                                <li>Business logo design
                                </li>
                                <li>Hosting service included
                                </li>
                                <li>Blog (3 Articles)
                                </li>
                                <li>Free support 1 month
                                </li>
                                <li>Products up to 10 (for e-commerce)
                                </li>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    Choose standard
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    Literally you probably haven't heard of them jean shorts.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 gap-2 flex flex-col relative overflow-hidden">
                                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                                    Popular
                                </span>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    Professional
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$999</span>
                                    <span className="text-lg ml-1 font-normal text-gray-500"></span>
                                </h1>
                                <li>Up to 20 pages website
                                </li>
                                <li>Premium theme with advanced customization
                                </li>
                                <li>Advanced web security setup
                                </li>
                                <li>SEO optimization (standard)
                                </li>
                                <li>Dynamic Functionality</li>
                                <li>Business logo design
                                </li>
                                <li>Live chat and contact forms
                                </li>
                                <li>Blog (5 Article)</li>
                                <li>Hosting service included
                                </li>
                                <li>Free support 3 month
                                </li>
                                <li>Products up to 30 (for e-commerce)
                                </li>
                                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                                    Get professional
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    Literally you probably haven't heard of them jean shorts.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 gap-2 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 capitalize font-medium">
                                    BUSINESS plan
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$1500</span>
                                    {/* <span className="text-lg ml-1 font-normal text-gray-500">/mo</span> */}
                                </h1>
                                <li>Up to 30 pages website
                                </li>
                                <li>Fully custom premium theme design
                                </li>
                                <li>Comprehensive web security setup
                                </li>
                                <li>Full SEO optimization and performance improvement
                                </li>
                                <li>Business logo and branding package
                                </li>
                                <li>Live chat, contact forms, CRM integration
                                </li>
                                <li>Hosting service included (premium server options)
                                </li>
                                <li>Products up to 50 (for e-commerce)
                                </li>
                                <li>Free support for 6 months
                                </li>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    Choose business
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    Literally you probably haven't heard of them jean shorts.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full gap-2 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    Enterprise Plan
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$2500</span>
                                    {/* <span className="text-lg ml-1 font-normal text-gray-500">/mo</span> */}
                                </h1>
                                <li>Unlimited pages website
                                </li>
                                <li>Custom theme and design from scratch
                                </li>
                                <li>Enterprise-level security
                                </li>
                                <li>Advanced SEO (includes audits, ongoing optimization)
                                </li>
                                <li>Complete branding package (logo, graphics, marketing material)
                                </li>
                                <li>Live chat, CRM, email marketing integration
                                </li>
                                <li>Hosting service included (dedicated server)
                                </li>
                                <li>Unlimited products (for e-commerce)
                                </li>
                                <li>Free support for 12 months
                                </li>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    Get Enterprise
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    Literally you probably haven't heard of them jean shorts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our projects */}
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Our Recent Projects of Web Design
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            "Take a look at some of our latest web design projects, showcasing creativity, functionality, and client satisfaction across various industries."


                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 object-cover object-center"
                                    src={websitedes}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-auto  object-cover object-center"
                                    src={lightup}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 object-cover object-center"
                                    src={websitedesign}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 my-40 object-cover object-center"
                                    src={shery}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 my-40 object-cover object-center"
                                    src={monstera}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 object-cover object-center"
                                    src={fluid}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 object-cover object-center"
                                    src={brothersbond}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-96 object-cover object-center"
                                    src={landingPage}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section> */}
            {/* Our projects */}
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-6">
                <div className="relative">
                    <img
                        src={lightup}
                        alt="Project 1"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">React, Firebase, TailwindCSS</p>
                        <p className="mt-4 text-sm">This project involves creating a fully responsive e-commerce website using React and Firebase for real-time data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={shery}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={fluid}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={websitedes}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={landingPage}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={websitedesign}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={airmax}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={brothersbond}
                        alt="Project 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-center items-center text-white p-6">
                        <h2 className="text-lg font-bold">Project Name</h2>
                        <p className="mt-2 text-sm">HTML, CSS, JavaScript</p>
                        <p className="mt-4 text-sm">A dynamic blog platform allowing users to post content, leveraging JavaScript and Firebase for user authentication and data management.</p>
                    </div>
                </div>

                {/* Add more cards for additional projects */}
            </div>



            {/* Accordion */}
            {/* <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"

                    >
                        WHAT KIND OF DIGITAL SERVICE DO YOU PROVIDE
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        CAN YOU INTEGRATE E-COMMERCE FUNCTIONALITY INTO MY WEBSITE
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        DO YOU PROVIDE WEB HOSTING   ?                 </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        WAHT IF I'M NOT SATISFIED WITH THE WORK                  </AccordionSummary>
                    <AccordionDetails>
                        Testing
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div> */}


        </>
    )
}
export default Services;