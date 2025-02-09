import adnanLogo from '../assets/adnanLogo.png';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#252734]">
            <div className="flex flex-col items-center">
                <div>
                    <img 
                        className='w-48 animate-zoom' 
                        src={adnanLogo} 
                        alt="Adnan Logo" 
                    />
                </div>
                <div>
                    <span className="loading loading-ring loading-lg bg-white"></span>
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

export default LoadingSpinner;
