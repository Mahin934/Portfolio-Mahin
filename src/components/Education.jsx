
import { FaUniversity, FaAward } from "react-icons/fa";

const Education = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 text-white py-12 my-10 rounded-lg md:my-28 px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Educational Qualification</h2>
        <p className="text-gray-300">
          Here is a summary of my academic journey and achievements throughout my education.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid justify-center bg-slate-900 p-3 rounded-lg space-y-8">
        {/* Current Education */}
        <div className="flex items-center space-x-6">
          <div className="text-yellow-500 text-4xl flex-shrink-0">
            <FaUniversity />
          </div>
          <div>
            <h3 className="text-2xl font-bold">BSc in Computer Science</h3>
            <p className="text-gray-300 mt-2">
              <strong>Institution:</strong> East West University, Dhaka
            </p>
            <p className="text-gray-300 mt-1">
              <strong>Expected Graduation:</strong> February 2025
            </p>
          </div>
        </div>

        {/* Scholarship */}
        <div className="flex items-center space-x-6">
          <div className="text-green-500 text-4xl flex-shrink-0">
            <FaAward />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Medha Lalon Scholarship</h3>
            <p className="text-gray-300 mt-2">
              Awarded for achieving a CGPA of 3.5 or higher for three consecutive semesters.
            </p>
            <p className="text-gray-300 mt-1">
              <strong>Institution:</strong> East West University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
