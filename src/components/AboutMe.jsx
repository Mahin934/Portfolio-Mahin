import React from "react";

const AboutMe = () => {
    return (
        <div className="bg-gradient-to-br md:w-4/6 mx-auto md:my-16 from-black to-gray-900 text-white py-12 px-8 rounded-lg shadow-lg flex justify-center items-center">
            {/* Content Wrapper */}
            <div className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    I’m a junior web developer who learned web development through Programming Hero. I enjoy creating websites and solving problems through coding. Watching anime is one of my favorite hobbies, and it often inspires me to think creatively. I am passionate about learning new technologies and improving my skills every day. Building websites allows me to turn ideas into reality, which gives me great satisfaction. I also enjoy exploring different design styles to make websites look modern and user-friendly. My goal is to grow as a developer and contribute to exciting projects while continuing to learn and do what I love.
                </p>

                {/* Details Section */}
                <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
                    <div className="grid grid-cols-4 text-left text-sm md:text-base gap-4">
                        <div>
                            <span className="font-bold text-gray-300">Name:</span>
                            <p className="text-white">Mahin Mia</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-300">Email:</span>
                            <p className="text-white">mahinmia934@gmail.com</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-300">Date of Birth:</span>
                            <p className="text-white">31 December 2001</p>
                        </div>
                        <div>
                            <span className="font-bold text-gray-300">From:</span>
                            <p className="text-white">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
