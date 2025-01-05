import { FaRegCalendarAlt } from 'react-icons/fa';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="bg-white px-4 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Project</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-8 mt-12">
            <div className="overflow-hidden p-4 rounded-md hover:bg-blue-100 transition-all duration-300">
              <img src={project1} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dora Gadget</h3>
                <p className="text-gray-800 text-sm mb-10">Welcome to Dora Gadget, an e-commerce platform designed to bring you the latest and greatest gadgets. Explore our wide range of products, add them to your cart, and manage your wishlist effortlessly.</p>
                <Link to='/Dora-Gadget' type="button" className="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-blue-500 hover:bg-blue-600 mt-6">
                  Read more
                </Link>
              </div>
            </div>
            <div className="overflow-hidden p-4 rounded-md hover:bg-blue-100 transition-all duration-300">
              <img src={project2} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Heat of Giving</h3>
                <p className="text-gray-800 text-sm mb-10">This platform connects generous donors with impactful donation campaigns across various divisions in Bangladesh. Users can explore donation campaigns, contribute items, and support those in need.</p>
                <Link to='/Donation-Platform' type="button" className="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-blue-500 hover:bg-blue-600 mt-6">
                  Read more
                </Link>
              </div>
            </div>
            <div className="overflow-hidden p-4 rounded-md hover:bg-blue-100 transition-all duration-300">
              <img src={project3} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Crowdcube</h3>
                <p className="text-gray-800 text-sm mb-10">Welcome to Crowdcube, a modern crowdfunding platform designed to help individuals and organizations raise funds for various projects, causes, and creative ideas.</p>
                <Link to='Crowd-Cube' type="button" className="px-5 py-2.5 text-white text-sm tracking-wider border-none outline-none rounded-md bg-blue-500 hover:bg-blue-600 mt-6">
                  Read more
                </Link>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Project;
