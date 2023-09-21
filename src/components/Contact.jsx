import React from "react";

const Contact = () => {
  return (
    <div className="py-16" id="contact">
      <div className="container px-4 mx-auto md:px-8">
        <h2 className="mb-6 text-4xl font-bold text-white">Contact Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-purple-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-purple-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full h-24 px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-purple-600"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white transition duration-300 bg-gray-600 rounded-md hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
            <p className="mb-2 text-gray-700">
              <span className="mr-2 font-semibold text-gray-900">Address:</span>
              ProTrade Commodities <br />Plot 184, Uche Secondus Crescent, Wuye,
              Abuja.
            </p>
            
            <p className="mb-2 text-gray-700">
              <span className="mr-2 font-semibold text-gray-900">Email:</span>
              contact@protradeco.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
