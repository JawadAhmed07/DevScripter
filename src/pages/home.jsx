// import { Button } from "antd";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import featureImage from '../Images/feature1.png';
import featureImage2 from '../Images/feature2.png';
import featureImage3 from '../Images/feature3.png';
import thinking from '../Images/thinking.png';
import featureImage4 from '../Images/feature4.png';
import blog1 from '../Images/blog1.png';
import blog2 from '../Images/blog2.png';
import blog3 from '../Images/blog3.png';
import { useEffect, useState } from 'react';
import '../App.css'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
function Home() {

    const testimonials = [
        {
            img: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-2eabcc3/thriveagency.com/files/Brandon-O-e1482942080144.jpg",
            text: "Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. The end result was a website that is attractive, organized and effective.",
            name: "Brandon O’Brien",
            title: "-Senior Product Designer",
            company: "Demilec (USA), LLC"
        },
        {
            img: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-2eabcc3/thriveagency.com/files/Kee-Service-e1482945003957.jpg",
            text: "We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Thrive to anyone looking to build a new website.",
            name: "Ross Asher",
            title: "- Owner",
            company: "Kee Service Co."
        },
        {
            img: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-2eabcc3/thriveagency.com/files/John-C-e1482943709835.jpg",
            text: "This team exceeded our expectations with the website redesign. They delivered a clean, modern platform that perfectly fits our brand, and our customer engagement has soared. We’ve seen a 150% increase in inquiries since the update. Highly recommend them for top-notch web development!",
            name: "Alex Martinez",
            title: "-Marketing Director",
            company: " Brightwave Solutions"
        },
        {
            img: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-2eabcc3/thriveagency.com/files/Cathy-O-e1482945620792.png",
            text: "Thrive listened to everything we needed and wanted in a new website, then delivered it! Our new website is fun, exciting and easy to use for me and our audiences. I have gone through website redesigns before, and by far, this one was the easiest and least painful. I was listened to and respected through every step. We couldn’t be happier with our new website",
            name: "Cathy O’Neal",
            title: "-Communications Director",
            company: "Levitt Pavilion Arlington, TX"
        },
        {
            img: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-2eabcc3/thriveagency.com/files/Debi-Maerz.jpg",
            text: "Quick response to changes/questions/ideas. Someone always answers right away.",
            name: "Debi Maerz",
            title: "Small business women",
            company: "Bakke Graduate Institute."
        },
        {
            img: "https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-2eabcc3/thriveagency.com/files/Melissa-M-e1482946329588.jpg",
            text: "We have been very happy with our new website! It looks professional and very easy to navigate. Thrive handles things efficiently and is available for any questions we have.",
            name: "Melissa Montiel",
            title: "-Marketing Director",
            company: "Sterling Protective Services, Inc."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Move to next testimonial automatically after 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 50000000); // 5000ms = 5 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };


    const [expanded, setExpanded] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setCurrentQuestion(panel);
        
        // Reset color after 3 seconds
        if (isExpanded) {
            setTimeout(() => {
                setCurrentQuestion(null);
            }, 3000);
        }
    };

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
            {/* 2nd page content*/}
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
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded shadow cursor-pointer bg-white border-opacity-60 mx-4 my-4
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
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded bg-white  shadow border-opacity-60 mx-4 cursor-pointer my-4
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
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded  bg-white  shadow border-opacity-60 mx-4 cursor-pointer my-4
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
                        <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border rounded bg-white shadow  border-opacity-60 mx-4 cursor-pointer my-4
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
                style={{ backgroundColor: "#4A7766" }}

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
                style={{ backgroundColor: "#4A7766" }} className="text-gray-600 body-font">
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
                        <div className="xl:w-1/4 md:w-1/2 p-4  ">
                            <div className="p-6 rounded-lg bg-white  hover:text-black
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                // onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4A7766')}
                                // onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}>
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
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
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="p-6 rounded-lg bg-white  hover:text-black
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
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
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="p-6 rounded-lg bg-white  hover:text-black
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
                                <img
                                    className="rounded w-16 object-cover object-center mb-6"
                                    src="https://w3torch.com/wp-content/uploads/2023/02/ecommerce-development-company.png"
                                    alt="content"
                                />
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-4">
                                    E-commerce Development</h2>
                                <p className="leading-relaxed text-base">
                                    Our ecommerce service create customized online stores with user-friendly interfaces and secure payment gateways to help businesses grow their online sales.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4 ">
                            <div className="p-6 rounded-lg bg-white  hover:text-black
                        transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border shadow"
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E9DFD8')}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}>
                                <img
                                    className="rounded w-16 object-cover object-center mb-6"
                                    src="https://w3torch.com/wp-content/uploads/2023/02/website-maintenance-company.png"
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Website Maintainance                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our website maintenance service ensures that your website is up-to-date, secure, responsive and running smoothly, allowing you to focus on your business while we take care of the technical details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sixth section (our recent blogs) */}
            <section
            style={{ backgroundColor: "#ECE7E2" }}
            className="text-gray-600 body-font">
                <h1 className="text-center text-green-700 align-center justify-center pt-10 text-4xl capitalize">"Explore the Latest in Web Development and SEO"
                </h1>
                <div className="container px-5 py-24 -my-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className=" h-60 w-full object-cover object-center"
                                    src={blog1}
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
                            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="h-60 w-full object-cover object-center"
                                    src={blog2}
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
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400">
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
                                    className="h-60 w-full object-cover object-center"
                                    src={blog3}
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
            <section
                style={{ backgroundColor: "#4A7766" }}
                className="text-gray-600 body-font"
            >
                <h1 className="text-2xl text-center text-white capitalize mb-4">Testimonials</h1>
                <h1 className="text-4xl font-medium text-center text-white capitalize mb-12">
                    What our clients say
                </h1>
                <div className="container mx-auto px-5 py-10">
                    <div className="testimonial-container">
                        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                            <div className="testimonial-card" key={index}>
                                <img
                                    alt="testimonial"
                                    className="object-cover object-center"
                                    src={testimonial.img}
                                />
                                <p className="leading-relaxed text-gray-600">{testimonial.text}</p>
                                <span className="inline-block" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider">
                                    {testimonial.name}
                                </h2>
                                <p className="text-gray-600">{testimonial.title} <br /> {testimonial.company}</p>
                            </div>
                        ))}
                    </div>
                    {/* Previous button */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 ml-5 text-2xl hover:bg-gray-400 text-green-500 font-bold px-4 rounded-full"
                    >
                        <ArrowBackIosNewSharpIcon />
                    </button>
                    {/* Next button */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 mr-5 text-2xl hover:bg-gray-400 text-green-500 font-bold px-4 rounded-full"
                    >
                        <ArrowForwardIosSharpIcon />
                    </button>
                </div>
            </section>
            {/* Accordion */}
            <section 
            style={{ backgroundColor: "#ECE7E2" }}
            className='flex justify-center align-center'>
                <div className="accordionside align-center pl-16 mt-8 w-auto">
                    <div className='px-10 py-5'>
                        <h1 className='font-medium text-lg uppercase py-2'>Faq's</h1>
                        <h1 className='text-4xl font-medium text-orange-700'>Frequently asked <br /> question</h1>
                    </div>
                    <div className='px-10'>
                        <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                            sx={{ backgroundColor: '#134e4a', borderBottom: '1px solid white' }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#f5f5f5' }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ color: currentQuestion === 'panel1' ? '#ffd700' : '#f5f5f5' }} // Gold when open
                            >
                                WHAT KIND OF DIGITAL SERVICE DO YOU PROVIDE?
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: '#f5f5f5', color: '#134e4a' }}>
                                We provide a variety of digital services including web development, graphic design, and SEO optimization.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                            sx={{ backgroundColor: '#134e4a', borderBottom: '1px solid white' }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#f5f5f5' }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                sx={{ color: currentQuestion === 'panel2' ? '#ffd700' : '#f5f5f5' }} // Gold when open
                            >
                                CAN YOU INTEGRATE E-COMMERCE FUNCTIONALITY INTO MY WEBSITE?
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: '#f5f5f5', color: '#134e4a' }}>
                                Yes, we can integrate e-commerce functionality using platforms like Shopify or WooCommerce based on your needs.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}
                            sx={{ backgroundColor: '#134e4a', borderBottom: '1px solid white' }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#f5f5f5' }} />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                                sx={{ color: currentQuestion === 'panel3' ? '#ffd700' : '#f5f5f5' }} // Gold when open
                            >
                                DO YOU PROVIDE WEB HOSTING?
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: '#f5f5f5', color: '#134e4a' }}>
                                Yes, we provide reliable web hosting services tailored to your requirements.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel4'}
                            onChange={handleChange('panel4')}
                            sx={{ backgroundColor: '#134e4a', borderBottom: '1px solid white' }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#f5f5f5' }} />}
                                aria-controls="panel4-content"
                                id="panel4-header"
                                sx={{ color: currentQuestion === 'panel4' ? '#ffd700' : '#f5f5f5' }} // Gold when open
                            >
                                WHAT IF I'M NOT SATISFIED WITH THE WORK?
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: '#f5f5f5', color: '#134e4a' }}>
                                We strive for client satisfaction. If you're not satisfied, we offer revisions until you're happy.
                            </AccordionDetails>
                        </Accordion>

                        {/* Additional Questions */}
                        <Accordion
                            expanded={expanded === 'panel5'}
                            onChange={handleChange('panel5')}
                            sx={{ backgroundColor: '#134e4a', borderBottom: '1px solid white' }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#f5f5f5' }} />}
                                aria-controls="panel5-content"
                                id="panel5-header"
                                sx={{ color: currentQuestion === 'panel5' ? '#ffd700' : '#f5f5f5' }} // Gold when open
                            >
                                CAN YOU HELP WITH SEO OPTIMIZATION?
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: '#f5f5f5', color: '#134e4a' }}>
                                Absolutely! We provide comprehensive SEO services to improve your website's visibility.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel6'}
                            onChange={handleChange('panel6')}
                            sx={{ backgroundColor: '#134e4a', borderBottom: '1px solid white' }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#f5f5f5' }} />}
                                aria-controls="panel6-content"
                                id="panel6-header"
                                sx={{ color: currentQuestion === 'panel6' ? '#ffd700' : '#f5f5f5' }} // Gold when open
                            >
                                DO YOU OFFER CUSTOM DESIGN SERVICES?
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: '#f5f5f5', color: '#134e4a' }}>
                                Yes, we specialize in custom designs tailored to your specific needs.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="imageside overflow-hidden w-full ">
                    <img className='w-auto h-auto mt-10 pl-16 ' src="https://w3torch.com/wp-content/uploads/2023/02/web-development-services-1.png" alt="" />
                </div>
            </section>
            {/* eight section (get in touch with us) */}
            <section
            style={{ backgroundColor: "#4A7766" }}
            className="text-white body-font proposal relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h6 className="capitalize text-lg font-medium title-font mb-4 text-white">
                            Interested?
                        </h6>
                        <h1 className="sm:text-3xl capitalize text-2xl font-medium title-font mb-4 text-white">
                            Request a free proposal
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Our team is here to provide you with expert guidance and support you need to succeed in the digital age
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-md text-white">
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
                                    <label htmlFor="email" className="leading-7 text-md text-white">
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
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="Phone" className="leading-7 text-md text-white">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="Url" className="leading-7 text-md text-white">
                                        URL (optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="url"
                                        placeholder='Enter your website URL'
                                        name="url"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-white"
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
                                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Send Request
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