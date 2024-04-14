import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative text-white">
        <img
          src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Car"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center space-y-4 p-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Welcome to Our Car Rental Service
          </h2>
          <p className="text-xl md:text-2xl">
            The best place to rent your dream car.
          </p>
          <Link
            to="/booking"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out rounded text-sm md:text-base"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-2xl font-bold md:text-3xl">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-6 shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1708791117392-e40dfc983f0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Cars"
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="font-bold text-lg mt-2">Luxury Cars</h4>
              <p>
                Experience the best of luxury and comfort with our premium
                vehicles.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Economy Cars"
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="font-bold text-lg mt-2">Economy Cars</h4>
              <p>
                Reliable and affordable cars that will get you where you need to
                go.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1615063029891-497bebd4f03c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SUVs"
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="font-bold text-lg mt-2">SUVs</h4>
              <p>Ideal for family trips with ample space and comfort.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience (Review) Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-2xl font-bold md:text-3xl">
            Customer Experiences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-6 shadow-lg rounded-lg bg-white">
              <p className="text-sm md:text-base">
                Amazing service! The car was in perfect condition and the staff
                was incredibly helpful. Highly recommend!
              </p>
              <div className="mt-4">
                <span className="font-bold">Vraj Panchal</span>
                <span className="block text-xs md:text-sm text-gray-500">
                  March 2021
                </span>
              </div>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-white">
              <p className="text-sm md:text-base">
                I rented a luxury car for a weekend getaway and it was an
                unforgettable experience. Great prices and friendly service.
              </p>
              <div className="mt-4">
                <span className="font-bold">Umang Soni</span>
                <span className="block text-xs md:text-sm text-gray-500">
                  July 2021
                </span>
              </div>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-white">
              <p className="text-sm md:text-base">
                The booking process was quick and easy, and the car was ready
                and waiting when I arrived. Excellent!
              </p>
              <div className="mt-4">
                <span className="font-bold">Alex Johnson</span>
                <span className="block text-xs md:text-sm text-gray-500">
                  November 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
