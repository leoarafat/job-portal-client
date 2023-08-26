import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import IMG from "../../assests/job-hero/job.png";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:space-x-6">
          {/* First Column */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Find Recent Job Circular. <br />
              Skill Jobs - The Best Job Application Site
            </h2>
            <p className="mt-4 text-gray-600">
              Are you looking for a job? Find all recent job circular available
              in Bangladesh and around the globe in one place with easy job
              application feature. Post your resume or discover valuable career
              resources on Skill Jobs - the largest job site in Bangladesh.
            </p>
            <div className="mt-8 ">
              <div className="flex space-x-4 ">
                <div className="relative w-2/3 shadow-xl rounded-lg">
                  <input
                    type="text"
                    className="w-full bg-white py-2 px-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                </div>
                <button className="w-1/3 bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-xl">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="hidden md:block w-full h-full rounded-lg overflow-hidden">
              <Image
                src={IMG} // Replace with your image URL
                alt="Hero Image"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
