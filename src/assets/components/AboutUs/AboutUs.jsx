import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* About Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-800">About Us</h1>
        <p className="text-md text-gray-600 mt-2">
          Learn more about our mission, and the story behind our car rental
          service.
        </p>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 md:px-0">
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Car Rental Service, our mission is to provide seamless car rental
            experiences at affordable prices, ensuring every trip is enjoyable
            and stress-free. We strive to exceed customer expectations with our
            commitment to quality and service.
          </p>
        </div>

        {/* History Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our History</h2>
          <p className="text-gray-700">
            Founded in 2005, we have grown from a small startup in Motor City to
            one of the leading car rental agencies in the nation. Through a
            dedication to innovation and customer service, we have expanded our
            offerings to include a wide range of vehicles suitable for all kinds
            of adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
