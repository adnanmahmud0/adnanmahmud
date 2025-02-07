
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div id='project' className="px-4 py-10 flex justify-center items-center my-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">Project</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-8 mt-12">
            <div className="overflow-hidden p-4 rounded-md hover:bg-white hover:text-black text-white transition-all duration-300">
              <img src={project1} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center">
                <h3 className="text-xl font-bold  mb-4">Dora Gadget</h3>
                <p className=" text-sm mb-10">Welcome to Dora Gadget, an e-commerce platform designed to bring you the latest and greatest gadgets. Explore our wide range of products, add them to your cart, and manage your wishlist effortlessly.</p>
                <Link to='/Dora-Gadget' type="button" className=" py-2 px-5 border border-solid rounded-full border-gray-600 bg-white text-black">
                  Read more
                </Link>
              </div>
            </div>
            <div className="overflow-hidden p-4 rounded-md hover:bg-white hover:text-black text-white transition-all duration-300">
              <img src={project2} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Heat of Giving</h3>
                <p className=" text-sm mb-10">This platform connects generous donors with impactful donation campaigns across various divisions in Bangladesh. Users can explore donation campaigns, contribute items, and support those in need.</p>
                <Link to='/Donation-Platform' type="button" className=" py-2 px-5 border border-solid rounded-full border-gray-600 bg-white text-black">
                  Read more
                </Link>
              </div>
            </div>
            <div className="overflow-hidden p-4 rounded-md hover:bg-white hover:text-black text-white transition-all duration-300">
              <img src={project3} className="w-full h-64 object-cover rounded-md" />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Crowdcube</h3>
                <p className=" text-sm mb-10">Welcome to Crowdcube, a modern crowdfunding platform designed to help individuals and organizations raise funds for various projects, causes, and creative ideas.</p>
                <Link to='Crowd-Cube' type="button" className=" py-2 px-5 border border-solid rounded-full border-gray-600 bg-white text-black">
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
