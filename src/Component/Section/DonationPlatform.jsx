import React from 'react';
import { FaDonate, FaInfoCircle, FaHandHoldingHeart, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
import screenshot from '../../assets/project2.png';

const DonationPlatform = () => {
    return (
        <div className="min-h-screen text-white p-6">
            <div className="max-w-6xl mx-auto shadow-lg rounded-lg p-6">
                <h1 className="text-6xl font-bold text-center mb-6 text-white">Donation Platform</h1>

                <p className="text-lg text-gray-300 text-center mb-4">
                    This platform connects generous donors with impactful donation campaigns across Bangladesh.
                </p>

                <div className="flex justify-center my-6">
                    <img
                        src={screenshot}
                        alt="Donation Platform Screenshot"
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                    />
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Live Website</h2>
                    <a
                        href="https://heat-of-giving.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Donation Platform Live Link
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">GitHub Repository</h2>
                    <a
                        href="https://github.com/adnanmahmud0/assignment9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Donation Platform GitHub Link
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><FaDonate className="inline text-indigo-500" /> <strong>Browse Campaigns:</strong> View campaigns categorized by division.</li>
                        <li><FaInfoCircle className="inline text-indigo-500" /> <strong>Campaign Details:</strong> View detailed information about each campaign.</li>
                        <li><FaHandHoldingHeart className="inline text-indigo-500" /> <strong>Donate Items:</strong> Fill out forms to contribute specific items.</li>
                        <li><FaMobileAlt className="inline text-indigo-500" /> <strong>Responsive Design:</strong> Optimized for mobile, tablet, and desktop devices.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Challenges Faced</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Ensuring an intuitive UI for smooth user experience.</li>
                        <li>Managing state efficiently for donation campaigns.</li>
                        <li>Optimizing performance with dynamic data fetching.</li>
                        <li>Deploying the platform while maintaining responsiveness.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Adding a backend for campaign creation and management.</li>
                        <li>Integrating authentication for personalized donation tracking.</li>
                        <li>Implementing payment gateway for monetary donations.</li>
                        <li>Enhancing UI with animations and better interactivity.</li>
                    </ul>
                </div>

                <p className="text-center text-gray-500 mt-8">
                    Thank you for exploring the Donation Platform! 🙌
                </p>
            </div>
        </div>
    );
};

export default DonationPlatform;
