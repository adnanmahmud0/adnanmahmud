import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiPhp, SiPython, SiKeras } from "react-icons/si";

const SkillEducation = () => {
    return (
        <>
            <div id="skilledu" className="max-w-7xl mx-auto py-16 px-6 my-32">
                <h2 className="text-white text-4xl font-bold text-center mb-10">
                    My Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-center border border-white/20">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Frontend</h3>
                        <div className="flex justify-center space-x-6 text-5xl text-blue-500">
                            <p><FaHtml5 /> <FaCss3Alt /> <SiTailwindcss /> <FaJs /> <FaReact /></p>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-center border border-white/20">
                        <h3 className="text-2xl font-semibold mb-4 text-green-300">Backend</h3>
                        <div className="flex justify-center space-x-6 text-5xl text-green-500">
                            <p><FaNodeJs /> <SiExpress /> <SiMongodb /> <SiPhp /></p>
                        </div>
                    </div>

                    {/* Data Science & AI */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-center border border-white/20">
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Data Science & AI</h3>
                        <div className="flex justify-center space-x-6 text-5xl text-yellow-500">
                            <p className="space-y-3">
                                <SiPython /> <SiKeras />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6">
                <h2 className="text-white text-4xl font-bold text-center mb-10">
                    Educational Qualification
                </h2>
                <div class="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
                    <div class="md:h-[400px]">
                        <img src="https://studentshub.daffodilvarsity.edu.bd/assets/img/about/1719679319.jpeg" class="w-full h-full rounded-md object-cover" />
                    </div>

                    <div class="max-md:text-center">
                        <h3 class="text-white font-semibold md:text-3xl text-2xl md:leading-10">Daffodil International University</h3>
                        <p class="text-gray-300 mt-4 text-sm leading-relaxed">B.Sc. in Computer Science and Engineering</p>
                    </div>
                </div>
            </div>
        </>


    );
};

export default SkillEducation;