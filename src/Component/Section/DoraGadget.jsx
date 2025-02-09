import React from 'react';
import { FaShoppingCart, FaHeart, FaCheckCircle } from 'react-icons/fa';
import projectImage from '../../assets/project1.png';

const DoraGadget = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-6xl mx-auto bg-gray-800 shadow-lg rounded-lg p-6">
                <h1 className="text-6xl font-bold text-center mb-6 text-white">Dora Gadget</h1>

                <p className="text-lg text-gray-300 text-center mb-4">
                    Welcome to <strong>Dora Gadget</strong>, an e-commerce platform designed to bring you the latest and greatest gadgets. Explore our wide range of products, add them to your cart, and manage your wishlist effortlessly.
                </p>

                <div className="flex justify-center my-6">
                    <img
                        src={projectImage}
                        alt="Dora Gadget Screenshot"
                        className="rounded-lg shadow-lg w-full max-w-2xl"
                    />
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-white">Live Website</h2>
                    <a
                        href="http://dora-gadget.surge.sh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Dora Gadget Live Link
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-white">GitHub</h2>
                    <a
                        href="https://github.com/adnanmahmud0/assignment8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Dora Gadget GitHub Link
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-white">Requirement Document</h2>
                    <a
                        href="https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-adnanmahmud0/blob/main/public/Batch-10_Assignment-08-.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Assignment Requirement Document
                    </a>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-white">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><FaShoppingCart className="inline text-blue-400" /> <strong>Product Listing & Categorization:</strong> Displays gadgets in a grid view, organized by categories such as Computers, Phones, Smartwatches, etc.</li>
                        <li><FaHeart className="inline text-red-400" /> <strong>Cart and Wishlist Management:</strong> Users can add items to the cart and wishlist, view totals, and manage them with ease.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> <strong>Detailed Product Pages:</strong> Each product has a dedicated details page with a full description, price, specifications, and add-to-cart and wishlist options.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> <strong>Price Sorting & Filtering:</strong> Users can sort cart items by price and filter products by category for easy navigation.</li>
                        <li><FaCheckCircle className="inline text-green-400" /> <strong>Responsive Design & 404 Page:</strong> Ensures a smooth user experience across devices and includes a custom 404 error page for unknown routes.</li>
                    </ul>
                </div>

                <p className="text-center text-gray-400 mt-8">
                    Thank you for exploring Dora Gadget! 🚀
                </p>
            </div>
        </div>
    );
};

export default DoraGadget;
