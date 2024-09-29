import React from 'react'
import featureImage from '../Images/feature1.png';
import featureImage2 from '../Images/feature2.png';
import featureImage3 from '../Images/feature3.png';
import thinking from '../Images/thinking.png';
import featureImage4 from '../Images/feature4.png';


function Features() {
  return (
    <section
    // style={{ backgroundColor: "#ECE7E2" }}
    style={{backgroundColor: "white"}}
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
            <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border-2 rounded shadow cursor-pointer border-opacity-60 mx-4 my-4
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
            <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border-2 rounded bg-white  shadow border-opacity-60 mx-4 cursor-pointer my-4
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
            <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border-2 rounded  bg-white  shadow border-opacity-60 mx-4 cursor-pointer my-4
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
            <div className="xl:w-1/5 lg:w-1/3 md:w-1/2 w-full px-8 py-6 border-2 rounded bg-white shadow  border-opacity-60 mx-4 cursor-pointer my-4
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
  )
}

export default Features