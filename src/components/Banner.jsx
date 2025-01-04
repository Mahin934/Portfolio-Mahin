
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion";
import "animate.css"; // Importing Animation.css for additional effects

const Banner = () => {
    // Direct download link
    const googleDriveCVLink = "https://drive.google.com/uc?export=download&id=1rJ865t1NT31Grau4GtXXIJ0WcMn72EyV";

    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-white p-8">
            {/* Text Section */}
            <div className="flex-1">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I am <br />
                    <span className="text-green-500 animate__animated animate__flash animate__delay-2s">
                        Mahin Mia.
                    </span>
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-300 mb-6 animate__animated animate__fadeInUp"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    A Sydney-based front-end developer passionate about building
                    accessible and user-friendly websites.
                </motion.p>
                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    {/* Contact Button */}
                    <a
                        href={googleDriveCVLink}
                        download="Mahin_Mia_CV.pdf" // Optional: specify filename
                        className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition"
                    >
                        <GoDownload />
                        <span>Download CV</span>
                    </a>
                    {/* Social Icons */}
                    <a
                        href="https://www.linkedin.com/in/mahin-mahin-94392a344/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Mahin934"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaGithub />
                    </a>
                </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
                className="flex-1 mt-8 md:mt-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="https://i.ibb.co/D5DCb1t/img1-1.png" // Ensure this is the correct image URL
                        alt="Mahin Mia"
                        className="w-full md:h-[780px] object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;
