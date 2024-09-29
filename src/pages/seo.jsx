


function Seo() {
    return (
        <>
            {/* 1st section intro */}
            <section className="text-gray-100  body-font seo-first-page">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                            Before they sold out
                            <br className="hidden lg:inline-block" />
                            readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Button
                            </button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="https://dummyimage.com/720x600"
                        />
                    </div>
                </div>
            </section>
            {/* Second section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">
                            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
                            hammock starladder roathse. Craies vegan tousled etsy austin.
                        </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                            Sign Up
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
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
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Literally you probably haven't heard of them jean shorts.
                        </p>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Seo;