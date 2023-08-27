import React from "react";

const Contact = () => {
  return (
    <div className="py-16" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-white text-4xl font-bold mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-purple-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-purple-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  className="w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-purple-600 h-24"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-900 font-semibold mr-2">Address:</span>
              ProTrade Commodities Plot 184, Uche Secondus Crescent, Wuye,
              Abuja.
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-900 font-semibold mr-2">Phone:</span>
              456-7890
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-gray-900 font-semibold mr-2">Email:</span>
              contact@protradeco.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
