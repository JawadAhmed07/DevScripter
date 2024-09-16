// import { Button } from "antd";
import Button from '@mui/material/Button';
import featureImage from '../Images/feature1.png';
import featureImage2 from '../Images/feature2.png';
import featureImage3 from '../Images/feature3.png';
import featureImage4 from '../Images/feature4.png';

function Home() {
    return (
        <>
            {/* Main front page (compay description) */}
            <section
                className="text-gray-600 body-font bg-cover bg-center" style={{
                    backgroundImage: 'url(https://doctorofseo.com/wp-content/uploads/revslider/home-1/slide1-home1.jpg)',
                    // backgroundColor:"#4A7766"
                }}>
                <div
                    className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-opacity-50 ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 px-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl capitalize text-3xl mb-4 font-medium text-white">
                            Best website <br /> development
                            <br className="lg:inline-block" />
                            Company{/* company agence service  yahn hide show animation dalni hy or 3word k sath */}
                        </h1>

                        <p className="mb-8 w-80 leading-relaxed text-white">
                            Our web development service provide modern, responsive and user-friendly website that drive growth and showcase you business
                        </p>
                        <div className="flex justify-center">
                            {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded capitalize text-lg">
                                Request a Proposal
                            </button> */}
                            <Button variant="contained">Request a proposal </Button>

                        </div>
                    </div>
                </div>
            </section>
            {/* 2nd page content
            https://w3torch.com/services/web-development/
            */}

            <section
                style={{ backgroundColor: "#ECE7E2" }}
                // style={{backgroundColor: "#4A7766"}}
                className="text-gray-600 body-font ">
                <div className="container px-3 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-indigo-500 tracking-widest text-2xl font-medium title-font mb-1">
                            Core Features
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">
                            Specialize in web development service
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            "Crafting unique and personalized web experiences that deliver impactful and lasting results for your business."
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded shadow cursor-pointer  border-opacity-60 mx-4 my-4
                        hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg"
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                        >
                            <img src={featureImage} alt="Feature" />
                            <h2 className="text-lg sm:text-xl my-2 text-gray-900 font-medium title-font mb-2">
                                CUSTOMIZED SOLUTIONS
                            </h2>
                            <p className="leading-relaxed my-2 text-base mb-4">
                                Tailored web development solutions to meet your unique business needs.
                            </p>
                        </div>
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded  shadow border-opacity-60 mx-4 cursor-pointer my-4
                        hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg"
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
                            <img src={featureImage2} alt="Feature" />
                            <h2 className="text-lg sm:text-xl my-2 text-gray-900 font-medium title-font mb-2">
                                CREATIVE SOLUTION

                            </h2>
                            <p className="leading-relaxed my-2 text-base mb-4">
                                TInnovative and creative web designs that captivate and convert.


                            </p>
                        </div>
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded   shadow border-opacity-60 mx-4 cursor-pointer my-4
                        hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg"
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
                            <img src={featureImage3} alt="Feature" />
                            <h2 className="text-lg sm:text-xl my-2 text-gray-900 font-medium title-font mb-2">
                                ROI-DRIVEN APPROACH

                            </h2>
                            <p className="leading-relaxed my-2 text-base mb-4">
                                Maximizing your investment with strategies focused on delivering high returns.


                            </p>
                        </div>
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded shadow  border-opacity-60 mx-4 cursor-pointer my-4
                        hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg"
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
                            <img src={featureImage4} alt="Feature" />
                            <h2 className="text-lg sm:text-xl my-2 text-gray-900 font-medium title-font mb-2">
                                EXPERT TEAM
                            </h2>
                            <p className="leading-relaxed my-2 text-base mb-4">
                                A team of seasoned professionals dedicated to your project's success.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* Third section (How we work) */}
            <section
                // style={{ backgroundColor: "#ECE7E2" }}
                style={{backgroundColor: "#4A7766"}}

                className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-black pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider ">
                                        STEP 1
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        Understand your needs and create a clear plan.


                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-black pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider ">
                                        STEP 2
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        Craft a custom design and prototype for approval.

                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-black pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx={12} cy={5} r={3} />
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider ">
                                        STEP 3
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        Turn the design into a fully functional solution.


                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-black pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider ">
                                        STEP 4
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        Thorough testing and revisions based on your feedback.

                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <path d="M22 4L12 14.01l-3-3" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-lg text-gray-100 mb-1 tracking-wider ">
                                        FINISH
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        Finalize and deliver the project, ready for launch.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                            src="https://doctorofseo.com/wp-content/uploads/2020/02/image1-home1.png"
                            alt="step"
                        // src="https://cdn.pixabay.com/photo/2022/08/31/18/11/teamwork-7423950_640.jpg"
                        // alt="step"
                        />
                    </div>
                </div>
            </section>
            {/* Fourth section (our clients and project done) */}
            <section
                style={{ backgroundColor: "#ECE7E2" }}
                className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap-reverse">
                    <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 lg:mt-0">
                        <img
                            className="object-cover object-center w-full h-full"
                            src="https://images.pexels.com/photos/8439691/pexels-photo-8439691.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="stats"
                        />
                    </div>
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start lg:pl-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                                Explore Our Services And Boost Your Online Presence
                            </h1>
                            <div className="leading-relaxed">
                                DEV SCRIPTERS is a digital acceleration consultancy founded in 2021. Dev Scripters builds digital products that let people do things differently – offering digital acceleration tools, resources and know-how to companies of all shapes and sizes – to make beautifully designed digital products in a way that’s fast and fits their needs.

                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">35+</h2>
                            <p className="leading-relaxed">Active client</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">150</h2>
                            <p className="leading-relaxed">Project done</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">8+</h2>
                            <p className="leading-relaxed">Team Advisor</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Products</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fifth section (service we offer) */}
            <section
            style={{backgroundColor:"#4A7766"}} className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                What we offer <br /> Web Development Services

                            </h1>
                            <div className="h-1 w-72 bg-indigo-500 rounded" />
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            We specialize in building websites that are fast, responsive, and tailored to your business goals. Whether it's creating a new site from scratch or improving an existing one, our focus is on delivering a seamless, engaging experience for your users.

                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="p-6 rounded-lg  hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}>
                                <img
                                    className=" rounded w-16 object-cover object-center mb-6"
                                    src="https://w3torch.com/wp-content/uploads/2023/02/core-development-company.png"
                                    alt="content"
                                />
                                <h2 className="text-xl text-gray-900 font-medium  title-font mb-4 ">
                                    Custom website development
                                </h2>
                                <p className="leading-relaxed text-base">Our custom web development service offers tailored solutions that cater to your unique business needs and provide a seamless user experience for your customers.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="p-6 rounded-lg  hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}>
                                <img
                                    className="rounded w-16 object-cover object-center mb-6"
                                    src="https://w3torch.com/wp-content/uploads/2023/02/wordpress-development-agency.png"
                                    alt="content"
                                />
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-4">
                                    Wordpress Development
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our WordPress web development service provides customizable and user-friendly websites for businesses of all sizes, with a focus on modern design and responsive functionality.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="p-6 rounded-lg  hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}>
                                <img
                                    className="rounded w-16 object-cover object-center mb-6"
                                    src="https://w3torch.com/wp-content/uploads/2023/02/ecommerce-development-company.png"
                                    alt="content"
                                />
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-4">
                                    E-commerce Development                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our ecommerce web development service create customized online stores with user-friendly interfaces and secure payment gateways to help businesses grow their online sales.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="p-6 rounded-lg  hover:text-white
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}>
                                <img
                                    className="rounded w-16 object-cover object-center mb-6"
                                    src="https://w3torch.com/wp-content/uploads/2023/02/website-maintenance-company.png"
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Website Maintainance                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our website maintenance service ensures that your website is up-to-date, secure, and running smoothly, allowing you to focus on your business while we take care of the technical details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sixth section (our recent blogs) */}
            <section className="text-gray-600 body-font">
                <h1 className="text-center text-4xl capitalize">Our recent blogs</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://dummyimage.com/720x400"
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        CATEGORY
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        The Catalyzer
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://dummyimage.com/721x401"
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        CATEGORY
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        The 400 Blows
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://dummyimage.com/722x402"
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        CATEGORY
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Shooting Stars
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                                        microdosing tousled waistcoat.
                                    </p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                            6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* seventhsection (client testimonial) */}
            <section className="text-gray-600 body-font">
                <h1 className="text-4xl text-center capitalize">What our client says</h1>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://dummyimage.com/302x302"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                                    taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                    HOLDEN CAULFIELD
                                </h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://dummyimage.com/300x300"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                                    taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                    ALPER KAMU
                                </h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://dummyimage.com/305x305"
                                />
                                <p className="leading-relaxed">
                                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
                                    taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
                                    taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
                                    fanny pack vaporware.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                    HENRY LETHAM
                                </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* eight section (get in touch with us) */}
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl capitalize text-2xl font-medium title-font mb-4 text-gray-900">
                            Get in touch with us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                            gentrify.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
export default Home;