import { useState, useEffect } from "react";
import LandingServicesPhoto from "../assets/img/LandingServicesPhoto.jpg"; 
import Team from "../assets/img/Team.jpeg";
import { useIsMobile } from '@/context/MobileContext';
import { Link } from "react-router-dom";

const LandingServices = () => {
    const isMobile = useIsMobile();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    if (isMobile) {
        return (
            <div className="bg-black py-20 px-6">
                {/* Simple Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h2 className="text-3xl font-light text-white mb-4">
                        Crafted for the <span className="font-bold">Modern Gentleman</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xs mx-auto">
                        Premium grooming services in a sophisticated environment
                    </p>
                </div>

                {/* Clean Image */}
                <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src={LandingServicesPhoto}
                        alt="Fade2Black Experience"
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Simple Services List */}
                <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h3 className="text-xl font-light text-white text-center mb-8">Our Services</h3>
                    <div className="space-y-6 max-w-sm mx-auto">
                        <div className="text-center">
                            <h4 className="text-white font-medium mb-1">Premium Haircuts</h4>
                            <p className="text-sm text-zinc-500">Precision cuts tailored to your style</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-white font-medium mb-1">Straight Razor Shaves</h4>
                            <p className="text-sm text-zinc-500">Traditional hot towel experience</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-white font-medium mb-1">Beard Grooming</h4>
                            <p className="text-sm text-zinc-500">Expert trimming and styling</p>
                        </div>
                    </div>
                </div>

                {/* Simple CTA */}
                <div className={`text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Link to="/services">
                        <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                            View All Services
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-8 py-24">
                {/* Two Column Layout */}
                <div className="grid grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <h2 className="text-4xl font-light text-white mb-6">
                            Crafted for the <span className="font-bold">Modern Gentleman</span>
                        </h2>
                        
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                            At Fade2Black, we combine traditional barbering techniques with contemporary style to deliver an unmatched grooming experience.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Premium Haircuts</h3>
                                    <p className="text-sm text-zinc-500">Precision cuts tailored to your personal style</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Straight Razor Shaves</h3>
                                    <p className="text-sm text-zinc-500">Traditional hot towel shaving experience</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Beard Grooming</h3>
                                    <p className="text-sm text-zinc-500">Expert trimming, shaping, and styling</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/services">
                            <button className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors cursor-pointer duration-300 font-medium">
                                View All Services
                            </button>
                        </Link>
                    </div>

                    {/* Right - Image */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative">
                            <img
                                src={LandingServicesPhoto}
                                alt="Fade2Black Barbershop Experience"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingServices;