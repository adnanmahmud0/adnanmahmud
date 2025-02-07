import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import project3 from '../../assets/project3.png';

const Crowdcube = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Crowdcube - A Crowdfunding Application 🌟</h1>

                <p className="text-lg text-gray-700 text-center mb-4">
                    Welcome to <strong>Crowdcube</strong>, a modern crowdfunding platform designed to help individuals and organizations raise funds for various projects, causes, and creative ideas.
                </p>

                <div className="flex justify-center my-6">
                    <img
                        src={project3} // Replace with actual project screenshot URL
                        alt="Crowdcube Screenshot"
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                    />
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Live Website</h2>
                    <a
                        href="https://crowdcube-1b085.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Crowdcube Live Link
                    </a>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">GitHub</h2>
                    <a
                        href="https://github.com/adnanmahmud0/assignment10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Crowdcube github Link
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">✨ Features</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><FaCheckCircle className="inline text-green-500" /> Responsive Design: Fully responsive across mobile, tablet, and desktop devices.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Secure Authentication: User login and registration with password validation and social login options.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Campaign Management: Add, update, and delete campaigns with protected routes.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Donation Tracking: View all donated campaigns with detailed records for each user.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Engaging Extras: Includes interactive sections like sliders, animations, and theme toggles.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">🚀 Technologies Used</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><FaCheckCircle className="inline text-green-500" /> React.js: For building the user interface.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Tailwind CSS: For responsive and attractive styling.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> React Router: For seamless navigation.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Axios: For API integration.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Firebase Authentication: For secure login and registration.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Toastify/SweetAlert: For displaying alerts and messages.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Lottie React & React Tooltip: For animations and tooltips.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">📋 Pages and Features</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><FaCheckCircle className="inline text-green-500" /> Home Page: Interactive banner/slider, active campaigns, and extra sections.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> All Campaigns Page: View all campaigns in a sortable table format.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> 404 Page: Custom not-found page for invalid routes.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Add Campaign: Add new campaigns with a comprehensive form.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> My Campaigns: View, update, and delete your campaigns.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> Campaign Details: Detailed campaign view with donation option.</li>
                        <li><FaCheckCircle className="inline text-green-500" /> My Donations: View campaigns you’ve donated to.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">🛠️ Setup Instructions</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Ensure Node.js is installed on your machine.</li>
                        <li>Create a Firebase project and set up authentication.</li>
                        <li>Clone the repository:
                            <pre className="bg-gray-100 p-4 rounded mt-2 text-sm">
                                <code>git clone https://github.com/your-username/crowdcube-client.git</code>
                            </pre>
                        </li>
                    </ul>
                </div>

                <p className="text-center text-gray-500 mt-8">
                    Thank you for exploring Crowdcube! 🚀
                </p>
            </div>
        </div>
    );
};

export default Crowdcube;
