import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImage from '../../assets/profileImage.JPG';
import CV from '../../assets/adnanCV.pdf';



const HeroSection = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 items-center gap-8 max-w-7xl mx-auto mt-40">
                <div className="rounded-full overflow-hidden mx-auto">
                    <img
                        src={profileImage}
                        alt="Testimonial"
                        className="md:w-full md:h-full object-contain w-64"
                    />
                </div>

                <div className='text-white p-5'>
                    <h3 className="md:text-8xl text-4xl font-extrabold">
                        Hi! I'm <br />Adnan Mahmud
                    </h3>
                    <p className="mt-4">
                        Welcome to my professional portfolio. <br /> I am a Front-End Developer.
                    </p>

                    <div className="mt-8 text-left">
                        <a href={CV} className='text-white py-5 px-10 border border-solid rounded-full border-gray-600'>Download CV</a>
                    </div>

                    <div className="space-x-3 mt-8">
                        <a href="https://www.linkedin.com/in/adnanmahmud99?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]">
                            <FaLinkedinIn size={14} color="#fff" />
                        </a>
                        <a href="https://www.behance.net/adnanmahmud99"
                            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#1769ff] hover:bg-[#1558cc] active:bg-[#1769ff]">
                            <FaBehance size={14} color="#fff" />
                        </a>
                        <a href="https://github.com/adnanmahmud0"
                            className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#333] hover:bg-[#444] active:bg-[#333]">
                            <FaGithub size={14} color="#fff" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;