import { Button } from "antd";
import WhyChooseUs from "../components/whychoseus";
import hand from '../Images/gd/hand.webp';
import process from '../Images/gd/process.jpeg';
import Reviews from '../components/reviews';


function GraphicDesign() {
    return (
        <>
            {/* !st section */}
            <section
                style={{
                    backgroundImage: `url(${hand})`,
                }}
                className="text-gray-100 h-96 body-font bg-cover bg-center relative"
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay for better readability */}
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold text-center pt-20 p-5">Best Graphic Design Service</h1>
                    <p className="text-center  text-lg w-2/3 mx-auto ">
                        Dev Scripters, a reputed graphic design agency in Pakistan, creates unforgettable experiences that will captivate your audience and propel your business forward.
                    </p>
                </div>
            </section>
            {/* 2nd section */}
            <section className="text-gray-600 px-5 md:px-20 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                            Top Graphic Design
                            <br className="hidden md:block" /> {/* Line break for smaller screens */}
                            Company in Pakistan
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Around 94% of customers leave a website with poor graphics. The need for captivating visuals is undeniable. Who does not like inspiring visuals and interesting designs? Above all, graphic designs help sketch a premier personality of your brand. It adds life to your business model and inspires viewers to stick through.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Irrespective of your industry, you need a combination of good content with engaging visuals to entice your audience. At Zera Creative, we have a huge panel of top graphic designers with a knack for creativity who never fail to amuse their viewers.
                        </p>
                        <div className="flex justify-center">
                            <button className="bg-cyan-500 p-3 md:p-5 text-white rounded-md shadow-lg hover:bg-cyan-600 transition duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <div className="aspect-w-16 h-96">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/4yVwopzpWEY"
                                title="Best Graphic Design Agency in Pakistan - Zera Creative Agency"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our GD service */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className=" text-4xl uppercase font-bold title-font mb-2 text-gray-900">
                            Our Impressive Graphic Design Services

                        </h1>
                        <p className="lg:w-2/3 w-full leading-relaxed text-gray-500">
                            Offering a one-stop solution to all your design needs, Dev scripters is a professional design agency in Pakistan that offers a broad range of services. Giving precise attention to details, we aim to offer long-lasting visuals that boost your engagements organically.
                        </p>
                    </div>
                    <div className="flex px-12 container flex-wrap m-4">
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 bg-cyan-700 rounded-lg">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Logo Design
                                </h2>
                                <p className="leading-relaxed text-gray-100 text-base">
                                    Bespoke and original brand logo designs with versatility are what we promise.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Branding / Brand Identity
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    We cater to a complete range of branding design needs to make your brand stand out.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Company Profile Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Throw a professional outlook of your business on your prospects.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Stationery Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    With distinctive aesthetics, we offer a massive range of stationary design services.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Business Card Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Get incredible business card designs compared to the best graphic design companies.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Envelope Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Get a promising appeal and ensure progressive growth with finest envelope designs.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Label Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Establish a highly authoritative outlook on your brand with fully customised label designs.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Letterhead Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Complete your brand’s looks complete with a professionally designed letterhead.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Trade Show Booth Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Zera Creative knows the worth of a bespoke, quality designed trade show booth.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Ads Design
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Striking appeal, targeted approach, and bold aesthetics, the perfect ad designs.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Social Media Post Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    We know the art to engage your social audience with impeccable post designs.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    App Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Our best logo designers offer immersive, seamless and intuitive app designs.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Banner Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Create a lasting impression on your audience and let banner designs define your business.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Flyer Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    We offer simplistic yet inspiring flyer designs with striking emotional connections.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Poster Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Be bold and daring with a trendy poster design to bring out an appeal to your brand.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Resume Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    We create utterly professional and minimalistic resume designs for our clients.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Menu Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Add perfection and precision to your website with the interesting menu designs.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Print Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Immaculate and flawless, that’s how we define our incredible print designs.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Catalogue Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Show the potential of your business with attention-grabbing catalogue designs.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Brochure Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Two-folds to three-folds and much more. We offer a huge versatility in brochure designs.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Infographic Design
                                </h2>
                                <p className="leading-relaxed text-white  text-base">
                                    Deliver a plethora of information with eye-catching infographic visuals.

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Packaging Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Zera Creative offers the highest quality packaging designs to entice the customers.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    T-shirt Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    It’s not what we do, it’s how we do. Get captivating T-shirt design services.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 py-2 px-5">
                            <div className="border text-center border-gray-200 p-6 rounded-lg bg-cyan-700">
                                <h2 className="text-lg text-gray-100 font-medium text-center title-font mb-2">
                                    Book Cover Design

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                    Sleek, eye-catchy and inspiring book cover designs that boost sales.


                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button> */}
                </div>
            </section>
            {/* Our process of working */}
            <section className="text-gray-100 bg-black body-font">
                    <div className="text-center pt-10">
                        <h1 className="text-white text-4xl uppercase font-bold  text-center">Our Process
                        </h1>
                        <h2 className="pt-5 capitalize text-md">Turning Your ideas Into Reality
                        </h2>
                        <p className="w-2/3 pt-5 text-lg mx-auto">You know what’s the biggest perk to work with one of the notable best design agencies in Pakistan? Its accuracy, efficient communication and best top quality services. Zera Creative offers high quality vector design services with a sound process to ensure perfection.

</p>
                    </div>
                <div className="container px-20 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
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
                                    <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                                        1. Business Understanding

                                    </h2>
                                    <p className="leading-relaxed ">
                                        First, our graphic designers conduct in-depth research and gather details to understand the company fully. We learn about the competitors and buyer’s persona and make notes about the pain points of the audience to target.


                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
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
                                    <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                                    2. Strategic Planning

                                    </h2>
                                    <p className="leading-relaxed">
                                    Zera Creative is regarded as one of the top creative agencies in Pakistan for its targeted approach. Every aspect of the design, from angles to icons to aesthetics, brings out your brand’s unique personality.


                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
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
                                    <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                                    3. Graphical Implementation

                                    </h2>
                                    <p className="leading-relaxed">
                                    Using top-notch tools and software, we strive to add a blazing flare of creativity to our designs. We ensure to offer the most unique and captivating glimpse in every design that can capture the attention at a glance.


                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
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
                                    <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                                    4. Result Measurement

                                    </h2>
                                    <p className="leading-relaxed">
                                    For us, it’s not only about the clients who should be amused, but we ponder on the ROI every design generates. That’s our real achievement. We make sure our designs prove profitable and productive for your business.


                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-700 inline-flex items-center justify-center text-white relative z-10">
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
                                    <h2 className="font-medium title-font text-xl text-white mb-1 tracking-wider">
                                        FINISH
                                    </h2>
                                    <p className="leading-relaxed">
                                        Pitchfork ugh tattooed scenester echo park gastropub whatever
                                        cold-pressed retro.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* // lg:w-3/5 md:w-1/2 */}
                        <img
                            className="w-auto object-cover object-center rounded-lg md:mt-0 mt-12"
                            src={process}
                            alt="step"
                        />
                    </div>
                </div>
            </section>
            {/* text content */}
            <section className="bg-white py-10">
                <h1 className="text-4xl text-black capitalize font-bold text-center ">Our custom graphic design to change the game</h1>
                <p className="text-center text-black px-44 items-center justify-center mx-auto py-10 ">Design is all about touching the emotions of the viewers. At Zera Creative, one of the best graphic design agency in Pakistan, we put prime focus on understanding the motive and purpose of the design. We value the sentiments and show complete dedication to helping you reach your creative targets. Our graphic design firm has worked for over a decade and always stood up to our customers’ expectations. No matter if you have an unclear idea in your mind, get in touch with our professionals, and they have the expertise to bring out the true vision and turn it into a beautiful reality.</p>


            </section>
            {/* Why choose us */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 uppercase text-gray-900">
                        Why Count On Dev Scripters?
                        </h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        Dev Scripters is a hub of competent and best graphic designers of Pakistan. With our comprehensive range of design services, we help brands with noteworthy conceptualisation and appeal. Here are some of the many reasons we can help you grow with impeccable graphic designs.


                        </p>
                    </div>
                    <div className="flex gap-y-10 flex-wrap px-20 container">
                        <div className="xl:w-1/4 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Fast Turnaround Time
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                The experts of our graphic design firm guarantee to deliver a design within the first 48 hours. We ensure to fulfil the needs of our clients and drive creativity in every design. Every aspect of the visual resonates with the customer’s brand identity.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                Unlimited Revisions
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                We work till our clients are fully satisfied. So, do not worry about revisions. We value your sentiments and are committed to driving a positive change in your company’s success through our services. So, feel free to share your feedback.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                No Hidden Charges
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                Our tailored packages have descriptive details of our services and we do not cause inconvenience to our people. We have pre-defined roadmaps and process plans to keep our clients connected to what they will get and at what cost.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                Unique Designs

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                Every design has its unique identity and creative appeal. We ensure to bring out the appeal in the brand. The dedicated designers in our design company are committed and passionate. They know how to incorporate a striking appeal in the design.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-100 font-medium title-font mb-2">
                                Complete Source Files

                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                Being the owner of the design, you get the complete source file at the time of project submission. We will submit files in your desired formats to avoid causing any inconvenience for future use. You can even share your submission needs.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-100 font-medium title-font mb-2">
                                100% Transparency
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                With us, you get to experience 100% transparency and sincerity. We keep our clients connected throughout the design journey. Discussing the aesthetics, sharing ideas, and bringing their vision to reality is our foremost goal and prime practice.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 py-2 -m-4 px-10">
                            <div className="border text-center bg-cyan-700 border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-100 font-medium title-font mb-2">
                                Uninterrupted Communication
                                </h2>
                                <p className="leading-relaxed text-white text-base">
                                We ensure to keep a sound communication with our clients. And for that we assign a dedicated designer and project manager on the project. Our clients get to interact and discuss their needs with the professionals without any barrier.



                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button> */}
                </div>
            </section>
            {/* testimonials fake google reviews add krny hain ismy */}
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                        Testimonials
                    </h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="block w-5 h-5 text-gray-400 mb-4"
                                    viewBox="0 0 975.036 975.036"
                                >
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                                </svg>
                                <p className="leading-relaxed mb-6">
                                    Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
                                    neutra before they sold out fixie 90's microdosing. Tacos pinterest
                                    fanny pack venmo, post-ironic heirloom try-hard pabst authentic
                                    iceland.
                                </p>
                                <a className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src="https://dummyimage.com/106x106"
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">
                                            Holden Caulfield
                                        </span>
                                        <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="block w-5 h-5 text-gray-400 mb-4"
                                    viewBox="0 0 975.036 975.036"
                                >
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                                </svg>
                                <p className="leading-relaxed mb-6">
                                    Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
                                    neutra before they sold out fixie 90's microdosing. Tacos pinterest
                                    fanny pack venmo, post-ironic heirloom try-hard pabst authentic
                                    iceland.
                                </p>
                                <a className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src="https://dummyimage.com/107x107"
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">
                                            Alper Kamu
                                        </span>
                                        <span className="text-gray-500 text-sm">DESIGNER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* why choose us */}
            <WhyChooseUs data={"YOUR DESIGN PARTNER"} />
            <Reviews />



        </>
    )
}

export default GraphicDesign;