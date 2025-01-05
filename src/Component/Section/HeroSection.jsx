import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import profileImage from '../../assets/profileImage.JPG';


const HeroSection = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 items-center gap-8 max-w-7xl mx-auto min-h-screen">
                <div className="sm:h-[400px]">
                    <img
                        src={profileImage}
                        alt="Testimonial"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div>
                    <h3 className="text-7xl font-extrabold text-gray-800">
                        Hi! I'm <br />Adnan Mahmud.
                    </h3>
                    <p className="mt-4 text-sm text-gray-800">
                        Welcome to my professional portfolio. I am a MERN stack web developer.
                    </p>

                    <div className="mt-8 text-left">
                        <button className='btn btn-primary'>Download CV</button>
                    </div>

                    <div className="space-x-3 mt-8">
                        <a href=""
                            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                            <FaFacebookF size={14} color="#fff" />
                        </a>
                        <a href=""
                            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
                            <FaTwitter size={14} color="#fff" />
                        </a>
                        <a href=")"
                            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                            <FaLinkedinIn size={14} color="#fff" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;