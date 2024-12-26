import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white text-teal-600">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Footer Main Content */}
        <div className="mb-4">
          <p className="text-lg font-semibold">© 2024 SOULACE. All rights reserved.</p>
          <p className="text-sm mt-2">
            Developed by: Ahmed Alfey Sani, Faiza Maliat, Namisa Najah Raisa, Md H R Alif
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-800 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
