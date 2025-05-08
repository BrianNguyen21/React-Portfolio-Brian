import React from 'react';
import logo from '../assets/logo.png';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaTiktok,
} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="relative bg-transparent px-4 sm:px-8 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src={logo}
            alt="BN Logo"
            className="
              h-10 w-10
              sm:h-12 sm:w-12
              md:h-16 md:w-16
              rounded-full bg-white/10 p-1 sm:p-2
              shadow-md hover:shadow-xl transition-all
            "
          />
        </a>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-2xl sm:text-3xl">
          <a
            href="https://www.linkedin.com/in/brian-nguyen2121/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaLinkedin className="text-[#0A66C2]" />
          </a>
          <a
            href="https://github.com/BrianNguyen21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaGithub className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/briannguyenn21/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaInstagram className="text-[#E4405F]" />
          </a>
          <a
            href="https://open.spotify.com/user/nguyenbrian726"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaSpotify className="text-[#1DB954]" />
          </a>
          <a
            href="https://www.tiktok.com/@beastballermode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FaTiktok className="text-[#69C9D0]" />
          </a>
        </div>
      </div>
    </nav>
  );
}