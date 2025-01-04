import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import Swal from "sweetalert2";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success modal
        Swal.fire({
            title: "Form Submitted!",
            text: "Thank you for reaching out. I will get back to you soon.",
            icon: "success",
            confirmButtonText: "OK",
            background: "#111827", // Dark background
            color: "#ffffff", // White text
        });

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <footer className="bg-black text-white py-16 mt-10 md:mt-28 px-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                {/* Left Section */}
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">LET’S CONNECT</h2>
                    <p className="text-gray-400 mb-2">
                        Say hello at{" "}
                        <a href="mailto:robertgarcia@gmail.com" className="text-yellow-400 hover:underline">
                            mahinmia934@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-400">
                        For more info, here’s my{" "}
                        <a href="#" className="text-yellow-400 hover:underline">
                            resume
                        </a>
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 text-yellow-400">
                        <a href="https://www.linkedin.com/in/mahin-mahin-94392a344/" className="hover:text-yellow-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/Mahin934" className="hover:text-yellow-300">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://x.com/MahinEmran933" className="hover:text-yellow-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://www.facebook.com/mahin.emran.2024" className="hover:text-yellow-300">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-400 mt-8">
                © 2025 Mahin Mia
            </div>
        </footer>
    );
};

export default Footer;
