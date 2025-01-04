import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// Skills data
const skills = [
  {
    name: "Vanilla JavaScript",
    description:
      "List skill/technologies here. You can change the icon above to any available.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    description:
      "List skill/technologies here. You can change the icon above to any available.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    description:
      "List skill/technologies here. You can change the icon above to any available.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "MongoDB",
    description:
      "List skill/technologies here. You can change the icon above to any available.",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
  },
  {
    name: "Figma",
    description:
      "Design tool used for creating wireframes, prototypes, and UI/UX designs.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "C++",
    description:
      "High-performance programming language for system software and game development.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Python",
    description:
      "Versatile programming language used for web development, data science, and AI.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "HTML",
    description: "Markup language for structuring content on the web.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    description:
      "Style sheet language used for describing the presentation of a document written in HTML.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white rounded-lg py-12 px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">What I do</h2>
        <p className="text-gray-300 md:px-96">
          I have more than 1 years of experience building software for clients
          all over the world. Below is a quick overview of my main technical
          skill sets and technologies I use.
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000, // Time in milliseconds between slide transitions
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 p-6 h-60 rounded-lg shadow-lg text-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
