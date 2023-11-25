import React, { useState } from "react";
import RootLayout from "@/components/layouts/RootLayout";
import html2pdf from "html2pdf.js";

const ResumeBuilder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // console.log({
    //   name,
    //   email,
    //   phone,
    //   experience,
    //   education,
    //   skills,
    // });
  };
  const handlePDFGeneration = () => {
    const content = document.getElementById("resumeContent");
    const opt = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(content).set(opt).save();
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-indigo-200 rounded-full flex flex-shrink-0 justify-center items-center text-indigo-500 text-xl font-mono">
                P
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create Your Resume</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  Fill in the details below to create your professional resume.
                </p>
              </div>
            </div>
            <div id="resumeContent" className="divide-y divide-gray-200">
              <form className="pt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <label className="font-medium text-sm text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 px-3 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <label className="font-medium text-sm text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full py-2 px-3 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <label className="font-medium text-sm text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full py-2 px-3 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="123-456-7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <label className="font-medium text-sm text-gray-700">
                    Experience
                  </label>
                  <textarea
                    className="w-full py-2 px-3 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Details about your experience"
                    rows={4}
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  ></textarea>
                </div>

                <div className="relative">
                  <label className="font-medium text-sm text-gray-700">
                    Education
                  </label>
                  <textarea
                    className="w-full py-2 px-3 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Details about your education"
                    rows={4}
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  ></textarea>
                </div>

                <div className="relative">
                  <label className="font-medium text-sm text-gray-700">
                    Skills
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 px-3 mt-1 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                    placeholder="Skills (comma separated)"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={handlePDFGeneration}
                    className="bg-indigo-500 text-white font-semibold py-2 px-4 mt-6 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Generate PDF
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

ResumeBuilder.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
