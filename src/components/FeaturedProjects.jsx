
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const FeaturedProjects = () => {
    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400">
                        Here are some of the selected projects that showcase my passion for front-end development.
                    </p>
                </div>

                {/* Project-1 Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10 md:mb-44 lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Image Section */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/Tcv7hff/Screenshot-2025-01-04-205706.png"
                                alt="Project Thumbnail"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            FindTrack
                        </h3>
                        <p className="text-gray-300 mb-6">
                            FindTrack is a Lost and Found platform that connects individuals who have lost personal belongings with those who may have found them. It enables users to report lost items, browse found items, and take action to recover lost belongings. The website provides an easy way to post lost items, view matches, and communicate with others for safe retrieval.
                        </p>

                        {/* Project Info */}
                        <div className="mb-6">
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Role</span>
                                <span className="text-white">Full Stack Developer</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://mahin-find-track.surge.sh/"
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href="https://github.com/Mahin934/FindTrack-Website-Client"
                                className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                            >
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project-2 Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10 md:mb-44 lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Image Section */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/LJ3mMpR/Screenshot-2025-01-04-210809.png"
                                alt="Project Thumbnail"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            FrostGuardian
                        </h3>
                        <p className="text-gray-300 mb-6">
                            This platform connects donors with vulnerable communities in Bangladesh to provide warm clothing during winter. It simplifies the donation process while ensuring maximum impact for those in need.
                        </p>

                        {/* Project Info */}
                        <div className="mb-6">
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Role</span>
                                <span className="text-white">Full Stack Developer</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://mahin-frost-guardian.surge.sh/"
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href="https://github.com/Mahin934/winter-clothing-donation-website-assign-10?tab=readme-ov-file"
                                className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                            >
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project-3 Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
                    {/* Image Section */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full lg:w-1/2">
                        <div className="relative">
                            <img
                                src="https://i.ibb.co.com/sRzWV60/Screenshot-2025-01-04-211449.png"
                                alt="Project Thumbnail"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">
                            Gadget Shop
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Discover the latest gadgets and explore features designed to make your tech experience seamless. From expert reviews and hands-on tips to side-by-side comparisons, this page is your go-to guide for everything technology. Stay informed, get inspired, and make smarter choices with insights that keep you ahead of the curve.
                        </p>

                        {/* Project Info */}
                        <div className="mb-6">
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Year</span>
                                <span className="text-white">2024</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 py-2">
                                <span className="text-gray-400">Role</span>
                                <span className="text-white">Full Stack Developer</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://mahin-gadgets-shop-webpage.surge.sh/"
                                className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold space-x-2"
                            >
                                <FaExternalLinkAlt />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href="https://github.com/Mahin934/gadgets-shop-react-website-assign-8"
                                className="flex items-center text-green-400 hover:text-green-300 font-semibold space-x-2"
                            >
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;
