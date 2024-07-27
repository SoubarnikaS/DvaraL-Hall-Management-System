import React from 'react';
import Navbar from "./Navbar";
import { Carousel } from "@material-tailwind/react";
import Button from '@mui/material/Button';
import { MoveRight, Search, Calendar, Star } from 'lucide-react';

import LandingPageImg from '../images/LP2.avif'

const LandingPage = () => {
    const carouselItems = [
        {
            title: "Find Your Perfect Venue",
            description: "Discover spaces that bring your vision to life."
        },
        {
            title: "Seamless Event Planning",
            description: "From concept to execution, we've got you covered."
        },
        {
            title: "Unforgettable Experiences",
            description: "Create memories that last a lifetime."
        }
    ];

    const features = [
        { icon: Search, title: "Wide Selection", description: "Browse through our curated list of top-notch venues." },
        { icon: Calendar, title: "Easy Booking", description: "Streamlined process to secure your ideal date and location." },
        { icon: Star, title: "Premium Services", description: "Additional amenities to elevate your event experience." },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <Navbar />
            <main className="container mx-auto px-4 py-12">
                <section className="mb-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-1/2 space-y-6 p-5">
                            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight font-josefin-sans">
                                Your Vision, Our Spaces: <br />
                                <span className="text-blue-900">Perfect Events Await</span>
                            </h1>
                            <p className="text-xl text-gray-700 font-poppin">

                                Looking for a space that fits your vision?
                                Relax, we’ve got you covered with top-notch options.
                            </p>
                            <Button
                                style={{ color: "#1E3A8A" }}
                                className="hover:bg-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out"
                            >
                                Explore Venues <MoveRight className="ml-2" />
                            </Button>
                        </div>
                        <div className="lg:w-2/4 pr-5">
                            <img
                                src={LandingPageImg}
                                alt="Elegant Event Space"
                                className="rounded-xl shadow-2xl object-cover w-[60vw] h-[80vh]"
                            />
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonial Carousel */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What Our Clients Say</h2>
                    <Carousel
                        className="rounded-xl bg-white shadow-xl"
                        autoplay={true}
                        loop={true}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-blue-500" : "w-4 bg-blue-300"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        {carouselItems.map((item, index) => (
                            <div key={index} className="p-12 text-center">
                                <h3 className="text-2xl font-bold mb-4 text-blue-800">{item.title}</h3>
                                <p className="text-xl text-gray-700 italic">"{item.description}"</p>
                                <p className="mt-4 font-semibold text-purple-600">- Happy Client</p>
                            </div>
                        ))}
                    </Carousel>
                </section>
            </main>
        </div>
    );
}

export default LandingPage;