import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header
            style={{
                backgroundColor: "#ECE7E2",
            }}
            className="text-black body-font shadow shadow-black"
        >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl">DevScripters</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 text-green-800 text-lg" to="/">
                        Home
                    </Link>

                    {/* Services dropdown */}
                    <div className="relative inline-block text-left mr-5">
                        <button
                            className="text-green-800 text-lg flex items-center focus:outline-none"
                            style={{ textDecoration: 'none', border: 'none' }} // Ensuring underline is removed
                            onClick={toggleDropdown}
                        >
                            Services
                            <span className={`ml-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                                &#9660;
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                <div className="py-1">
                                    <Link
                                        to="/webdevelopment"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        style={{ textDecoration: 'none' }} // No underline
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/services/seo"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        style={{ textDecoration: 'none' }} // No underline
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        SEO
                                    </Link>
                                    <Link
                                        to="/services/graphic-design"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        style={{ textDecoration: 'none' }} // No underline
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Graphic Design
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>



                    <Link className="mr-5 text-green-800 text-lg" to="/contact">
                        Contact
                    </Link>
                    <Link className="mr-5 text-green-800 text-lg" to="/blog">
                        Blog
                    </Link>
                    <Link className="mr-5 text-green-800 text-lg" to="/about">
                        About Us
                    </Link>
                    <Link className="mr-5 text-green-800 text-lg" to="/writeforus">
                        Write For Us
                    </Link>
                </nav>
                <button
                    style={{ backgroundColor: "#4A7766" }}
                    className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                    Get a quote
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
