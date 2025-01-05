import React from 'react';

const SkillEducation = () => {
    return (
        <div className="bg-gray-100 px-6 py-12 min-h-screen">
            <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="max-h-80">
                        <img
                            src="https://readymadeui.com/management-img.webp"
                            alt="Image"
                            className="rounded-md object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
                            Skill
                        </h2>
                        <p className="text-gray-600 text-sm">
                            As a MERN Stack Web Developer this is my skills
                        </p>
                        <ul className="list-disc text-sm text-gray-600 space-y-2 pl-4 mt-6">
                            <li>
                                <strong className="text-blue">Frontend:</strong> HTML, CSS, Tailwind, JavaScript, and React.
                            </li>
                            <li>
                                <strong className="text-blue">Backend:</strong> Node.js, Express.js.
                            </li>
                            <li>
                                <strong className="text-blue">Database:</strong> MongoDB.
                            </li>
                            <li>
                                <strong className="text-blue">Additional Tools/Topics:</strong> Firebase, API integration, version control with Git/GitHub, and project deployment.
                            </li>
                        </ul>
                        <h2 className="text-3xl font-extrabold text-blue-700 my-4">
                            Education
                        </h2>
                        <p className="text-gray-600 text-sm">
                            B.Sc. in CSE <br />
                            Daffodil International University.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillEducation;