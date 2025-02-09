import adnanLogo from '../../assets/adnanLogo.png';

const AboutMe = () => {
    return (
        <div id='about' className="font-sans max-w-6xl max-md:max-w-md mx-auto my-32 p-5">
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                <div className="max-md:order-1 max-md:text-center text-white">
                    <p className="text-sm font-bold  mb-2">
                        ABOUT ME
                    </p>
                    <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
                        Hi, I'm MD ADNAN MAHMUD
                    </h2>
                    <p className="mt-4 text-base leading-relaxed">
                        A passionate Frontend Web Developer with a deep love for crafting interactive and responsive web applications. My journey began with curiosity about how websites function, leading me to master HTML, CSS, JavaScript, and frameworks like React. Over time, I expanded my skill set to include backend technologies such as Node.js, Express.js, and MongoDB.
                    </p>
                    <p className="mt-4 text-base leading-relaxed">
                        I enjoy building modern web experiences, optimizing performance, and enhancing user interactions. Whether it's designing UI components, integrating APIs, or deploying applications, I find joy in the entire development process.
                    </p>
                    <p className="mt-4 text-base leading-relaxed">
                        Beyond coding, I love exploring new technologies, playing video games, and watching tech-related content. When I'm not in front of my screen, you can find me enjoying music, reading books, or spending time outdoors.
                    </p>
                </div>
                <div className="lg:h-[650px] md:h-[550px] flex items-center before:bg-gray-700 relative max-md:before:hidden before:absolute before:h-full before:w-3/4 before:right-0 before:z-0">
                    <img
                        src={adnanLogo}
                        className="md:ml-10 rounded-md lg:w-3/4 md:w-11/12 z-50 relative animate-zoom"
                        alt="MD ADNAN MAHMUD"
                    />
                </div>
            </div>

            {/* Adding the keyframe animation directly in JSX */}
            <style jsx>{`
                @keyframes zoomInOut {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .animate-zoom {
                    animation: zoomInOut 3s infinite;
                }
            `}</style>
        </div>
    );
};

export default AboutMe;
