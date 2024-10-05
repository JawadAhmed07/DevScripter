import { Button } from "antd";
import WhyChooseUs from "../components/whychoseus";

import first from '../Images/seopage/first.png';
import second from '../Images/seopage/second.png';
import third from '../Images/seopage/third.png';
import fourth from '../Images/seopage/fourth.png';
import fifth from '../Images/seopage/fifth.png';
import sixth from '../Images/seopage/sixth.png';
import seventh from '../Images/seopage/seventh.png';
import eight from '../Images/seopage/eight.png';
import ninth from '../Images/seopage/ninth.png';
import searchengine from '../Images/seopage/searchengine.png';
import Reviews from '../components/reviews';
import eleven from '../Images/seopage/eleven.jpg';




function Seo() {
    return (
        <>
            {/* 1st section intro */}
            <section className="text-gray-100 body-font seo-first-page px-12">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:text-left lg:items-start">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-100">
                            Pakistan's Leading SEO
                            <br className="hidden lg:inline-block" />
                            Company (Since 2013)
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Get our expert SEO services to rank on top of Google. 4X your sales and turn your website traffic into paying leads with Zera Creative.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Get Free SEO audit
                            </button>
                            <button className="ml-4 inline-flex text-gray-700 bg-green-600 border-0 py-2 px-6 focus:outline-none hover:text-gray-200 rounded text-lg">
                                Whatsapp us
                            </button>
                        </div>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <div className="relative" style={{
                            paddingTop: '15vh',
                            height: '60vh'
                        }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/AWE6fcszyWM"
                                title="Best SEO Agency in Pakistan | Top SEO Services Company - Zera Creative"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* Second section */}
            <section className="text-gray-600 px-12 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-bold text-3xl text-gray-900">
                            EXPERT SEO SERVICES in Pakistan
                        </h1>
                        <h4 className="text-gray-500">Grow your business organically</h4>
                        <h2 className="leading-relaxed mt-4">
                            Our reliable SEO experts at Zera Creative, a leading SEO company in Pakistan, strictly followGoogle Guidelines for 100% White Hat SEO. This ensures long-term success by helping you penetrate the global market and establish an unbeatable footprint in the major search engines, ultimately turning your website visitors into paying customers. Check out our clients’ success stories in SEO and see how we can help you achieve similar results!
                        </h2>
                        <p className="w-72 text-black px-2 italic">
                            Everyone says SEO is complicated these days. At Zera Creative, we disagree – we see it as artful! Since day one, Google and other search engines’ algorithms have been trying to think like humans. So, why not take it a step further and prioritize optimization for humans first?
                        </p>
                        <Button className="bg-cyan-600 text-white my-5 p-6">Explore Seo Package</Button>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-green-500 text-3xl font-medium title-font mb-5">
                            Get FREE SEO Audit (Worth Rs. 10,000)
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                placeholder="Name"
                                name="full-name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="abc@gmail.com"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Website URL
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter your website URL"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <Button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-28">
                            Send
                        </Button>
                        <p className="text-xs text-gray-500 mt-3">
                            Literally you probably haven't heard of them jean shorts.
                        </p>
                    </div>
                </div>
            </section>
            {/* third section */}
            <section className="text-gray-100 px-12 bg-black body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-xs hidden  text-indigo-500 tracking-widest font-medium title-font mb-1">
                            Best seo service
                        </h1>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 uppercase text-gray-100">
                            What does Dev Scripters actually do?
                        </h1>
                        <h1 className="text-md text-gray-100 tracking-widest font-medium title-font mb-1">
                            We work day and night to grow your business organically.
                        </h1>
                    </div>
                    <div className="flex mx-auto align-center justify-center flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-100 font-medium uppercase title-font mb-2">
                                technical seo service
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                Our technical SEO experts make sure that all the search engine spiders crawl and index your website without any blockage to boost your overall SEO rankings. Moreover, we maintain a mobile-friendly website as Google is moving to
                            </p>
                            <a className="text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-100 font-medium uppercase title-font mb-2">
                                off page seo service
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                We only use White Hat SEO practices for your website’s off page SEO activities like brand mentions, local seo, social media, guest posting and link building. We only earn genuine backlinks from high-authority websites to increase your domain’s authority.
                            </p>
                            <a className="text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl text-gray-100 font-medium uppercase title-font mb-2">
                                On page seo service
                            </h2>
                            <p className="leading-relaxed text-base mb-4">
                                Zera Creative is one of the top SEO services company in Pakistan that fulfils all your "ON page seo needs"  with highly accurate SEO audit, competitor analysis, campaign plan, and SEO content audit to create fully optimized landing pages.                          </p>
                            <a className="text-indigo-500 inline-flex items-center">
                                Learn more
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <Button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Explore seo packages
                    </Button>
                </div>
            </section>
            {/* Fourth section */}
            <section className="text-gray-600 px-12 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900 uppercase">
                            4X your website sales within 6 months.
                        </h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            Dev Scripters is one of the top SEO service provider in Pakistan, help you grow your business. We only use reputed SEO tools, 100% white-hat techniques, and our own unique SEO strategies that provide 100% results in achieving top rankings on Google and major search engines. Have a look on what we offer exactly below.


                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center px-10 -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full mb-4">
                                    <img src={first} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Local seo service                                </h2>
                                <p className="leading-relaxed text-base">
                                    To create scalable SEO campaigns, our SEO experts carry out an in-depth competitive analysis. We use latest SEO tools to gather data that assist us to create result-oriented plans for your business.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={second} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Competitor Analysis
                                </h2>
                                <p className="leading-relaxed text-base">
                                    To create scalable SEO campaigns, our SEO experts carry out an in-depth competitive analysis. We use latest SEO tools to gather data that assist us to create result-oriented plans for your business.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={third} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Keyword Research

                                </h2>
                                <p className="leading-relaxed text-base">
                                    The SEO experts at Zera, useadvanced tools like Google Keywords Planner, Ahrefs, Semrush and others to gather the best long-tail and short-tail keywords with the highest monthly search volume.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={fourth} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    GSC/Webmaster Setup

                                </h2>
                                <p className="leading-relaxed text-base">
                                    We help in setting up Google and Bing Webmaster setup for your website. This enables you with a directory full of advanced tools to gather data needed to optimize your website.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={fifth} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Monthly SEO Report

                                </h2>
                                <p className="leading-relaxed text-base">
                                    To ensure 100% transparency on how our SEO campaigns are performing, our SEO Gurus timely monitor and provide monthly analytical reports with comparison stats of the previous months.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={sixth} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    SEO Optimized Content Writing
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Producing original human-written content is one imperative aspect of our expert SEO services. We research and create content that not only visually appeals to the readers but engrosses their attention.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={seventh} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Site Audits

                                </h2>
                                <p className="leading-relaxed text-base">
                                    Our SEO experts conduct a thorough analysis of your website and your competitors, and provide a detailed action plan for improvements.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={eight} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Image Optimization
                                </h2>
                                <p className="leading-relaxed text-base">
                                    The use of image search grew to 62% among millennials. We optimize all the images with alt tags, file names, titles, and captions to help locate your images easily on the search engines.


                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-4 rounded-lg">
                                <div className="w-16 inline-flex items-center justify-center rounded-full  mb-4">
                                    <img src={ninth} alt="" />
                                </div>
                                <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                                    Link Building
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Being the top SEO services company of Pakistan, we strive to build the authority of your domain through a highly relevant backlinking strategy. We create a full-fledged plan to get genuine links from high-authority sites in your niche.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="flex  mt-10 text-white bg-indigo-500 border-0 py-2 px-8 ml-11 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Get started
                    </button>
                </div>
            </section>
            {/* fifth section */}
            <section className="text-white bg-cyan-500 body-font px-12">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            How Can SEO Help Your Business Grow?
                        </h1>
                        <p className="mb-5 text-lg">More Leads, More Conversions, More Revenue</p>

                        <ol className="list-decimal list-inside text-left">
                            <li>SEO drives 1,000%+ more traffic than organic social media</li>
                            <li>The majority of marketers (60%) find inbound (SEO, blog content, etc.) to be the top source for quality leads</li>
                            <li>SEO leads are likely to convert at a high rate of 14.6%</li>
                            <li>First-page ranking is important as less than 1% look beyond it</li>
                            <li>Top search results increase a website’s credibility and trust</li>
                            <li>SEO is a cost-effective strategy for long-term traffic, unlike paid ads</li>
                        </ol>

                        <p className="py-2 text-xl font-bold">“SEO Is an Investment, Not An Added Cost”</p>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={searchengine}
                        />
                    </div>
                </div>

            </section>
            {/* Pricing section 6th */}
            <section class="text-gray-600 px-12 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                            <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
                            <button class="py-1 px-4 focus:outline-none">Annually</button>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$38</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$56</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
                                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$72</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center text-gray-600 mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center text-gray-600 mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonials fake google reviews add krny hain ismy */}
            {/* <section className="text-gray-600 px-12 body-font">
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
            <Reviews />
            {/* why choose us */}
            <WhyChooseUs data={"BEST SEO COMPANY"} />
            {/* free seo audit */}
            <section
            style={{
                height: '450px', // Set custom height here
              }}
                className="relative bg-cover bg-center h-screen text-gray-600  body-font"
            >
                <div
                    style={{
                        backgroundImage: `url(${eleven})`,
                        opacity: 0.5, // Adjust this to control the background image opacity
                    }}
                    className="absolute inset-0 bg-cover bg-center"
                ></div>

<div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-transparent opacity-60"></div>


                {/* Content goes here */}
                <div className="relative z-10 container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-white">
                            GET FREE SEO CONSULTATION AND AUDIT
                        </h1>
                        <p className="mb-8 w-2/3 text-xl  mx-auto text-white leading-relaxed">
                            Want a first spot at Google on multiple keywords and locations? Fill  in the contact form, and we’ll give you a call.
                        </p>
                        <div className="flex justify-center">
                            <Button className="font-semibold capitalize">Get in touch</Button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Seo;