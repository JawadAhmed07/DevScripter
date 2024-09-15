function Services() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Knausgaard typewriter readymade marfa
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
                            typewriter affogato, hella selvage wolf narwhal dreamcatcher.
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <label
                                    htmlFor="hero-field"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Placeholder
                                </label>
                                <input
                                    type="text"
                                    id="hero-field"
                                    name="hero-field"
                                    className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Button
                            </button>
                        </div>
                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                            Neutra shabby chic ramps, viral fixie.
                        </p>
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

        </>
    )
}
export default Services;