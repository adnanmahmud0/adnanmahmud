import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import projectImage from '../../assets/project3.png';

const Crowdcube = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-6xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">Crowdcube - A Crowdfunding Application 🌟</h1>

                <p className="text-lg text-gray-300 text-center mb-4">
                    Welcome to <strong>Crowdcube</strong>, a modern crowdfunding platform designed to help individuals and organizations raise funds for various projects, causes, and creative ideas.
                </p>

                <div className="flex justify-center my-6">
                    <img
                        src={projectImage}
                        alt="Crowdcube Screenshot"
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                    />
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-blue-300">Live Website</h2>
                    <a
                        href="https://crowdcube-1b085.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Crowdcube Live Link
                    </a>
                </div>
                
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-blue-300">GitHub</h2>
                    <a
                        href="https://github.com/adnanmahmud0/assignment10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Crowdcube GitHub Link
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-blue-300">✨ Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><FaCheckCircle className="inline text-green-400" /> Responsive Design: Fully responsive across all devices.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> Secure Authentication: User login and registration with social login options.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> Campaign Management: Add, update, and delete campaigns.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> Donation Tracking: View all donated campaigns with detailed records.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> Interactive UI: Includes animations, sliders, and a theme toggle.</li>
                    </ul>
                </div>

                <p className="text-center text-gray-400 mt-8">
                    Thank you for exploring Crowdcube! 🚀
                </p>
            </div>
        </div>
    );
};

export default Crowdcube;
