function Services() {
    return (
        <>
            {/* Main intro section */}
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
            {/* Pricing section */}
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                            Pricing
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
                        </p>
                        <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                                Monthly
                            </button>
                            <button className="py-1 px-4 focus:outline-none">Annually</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    START
                                </h2>
                                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                                    Free
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    Button
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
                            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                                    POPULAR
                                </span>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    PRO
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$38</span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Hexagon neutra unicorn
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                                    Button
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
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    BUSINESS
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$56</span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Hexagon neutra unicorn
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    Button
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
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    SPECIAL
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>$72</span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Hexagon neutra unicorn
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    Button
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
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Master Cleanse Reliac Heirloom
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                            gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                            heard of them man bun deep jianbing selfies heirloom.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="https://dummyimage.com/600x360"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="https://dummyimage.com/601x361"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        The Catalyzer
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
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="https://dummyimage.com/603x363"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        The 400 Blows
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
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="https://dummyimage.com/602x362"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Neptune
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
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="https://dummyimage.com/605x365"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Holden Caulfield
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
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src="https://dummyimage.com/606x366"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        THE SUBTITLE
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Alper Kamu
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
            </section>


        </>
    )
}
export default Services;