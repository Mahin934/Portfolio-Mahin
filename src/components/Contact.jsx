import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Mail Sent!",
            text: "Your message has been sent successfully. We'll get back to you soon.",
            confirmButtonColor: "#3085d6",
        });

        // Reset the form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="bg-black text-white py-16 px-8 flex justify-center items-center min-h-screen">
            {/* Content Wrapper */}
            <motion.div
                className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Header */}
                <motion.h2
                    className="text-4xl font-bold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 rounded-full to-purple-500"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Have a question or want to work together? Feel free to reach out!
                </motion.p>

                {/* Contact Details */}
                <div className="mb-8 text-center">
                    <p className="text-gray-300">
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:mahinmia934@gmail.com"
                            className="text-blue-400 hover:text-blue-500"
                        >
                            mahinmia934@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-300">
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+880123456789" className="text-blue-400 hover:text-blue-500">
                            +880 1736987956
                        </a>
                    </p>
                    <p className="text-gray-300">
                        <strong>WhatsApp:</strong>{" "}
                        <a
                            href="https://wa.me/+880123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500"
                        >
                            +880 1736987956
                        </a>
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <label htmlFor="name" className="text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="p-3 bg-gray-800 rounded-lg outline-none text-white focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <label htmlFor="email" className="text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="p-3 bg-gray-800 rounded-lg outline-none text-white focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <label htmlFor="message" className="text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Write your message here..."
                            rows="4"
                            className="p-3 bg-gray-800 rounded-lg outline-none text-white focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all"
                        >
                            Send Message
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
