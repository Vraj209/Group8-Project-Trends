import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Contact Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
        <p className="text-md text-gray-600 mt-2">
          We are here to help and answer any question you might have. We look
          forward to hearing from you.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
        {/* Form Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-2">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Send us a message
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Vraj Panchal"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Information Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-2">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Contact Information
          </h2>
          <ul>
            <li className="mb-3">
              <span className="font-bold">Address:</span> Conestoga Doon
              Campaus, Kitchenre City, Canada
            </li>
            <li className="mb-3">
              <span className="font-bold">Phone:</span> (123) 999-9999
            </li>
            <li className="mb-3">
              <span className="font-bold">Email:</span>{" "}
              contact@rentalservice.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
