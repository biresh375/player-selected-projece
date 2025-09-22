import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white mt-10">
      {/* Newsletter Section */}
      <div className="max-w-[1200px] mx-auto py-12">
        <div className="bg-gradient-to-r from-blue-100 via-white to-orange-100 rounded-xl shadow-lg p-8 text-center ">
          <h2 className="text-2xl font-bold text-gray-800">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-2">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
            />
            <button className="px-6 py-2 rounded-r-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium hover:bg-gradient-to-l">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-3">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
              <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium hover:bg-gradient-to-l">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          ©2024 Your Company All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
