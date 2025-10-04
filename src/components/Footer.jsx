import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/headlogo.png";

const nav = [
  { path: "/", label: "Home" },
  { path: "/resources", label: "Resources" },
  { path: "/services", label: "Services" },
  { path: "/newsletter", label: "Newsletter" },
  { path: "/case-studies", label: "Case Studies" },
  { path: "/about", label: "About Me" },
  { path: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#F5E9DC] py-8 space-y-10">
      <div className="max-w-6xl mx-auto px-4 lg:flex lg:justify-between lg:items-center">
        {/* Logo Section */}
        <div className="flex items-center mb-6 lg:mb-0">
          <NavLink to="/">
            <img
              loading="lazy"
              src={"/images/logo.svg"}
              alt="Logo"
              className="logo w-[130px]"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-6 lg:mb-0">
          {nav.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F5E9DC]"
                  : "text-navGray hover:text-[#F5E9DC] transition-colors duration-300"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-6 lg:mb-0">
          <a
            href="https://www.tiktok.com/@_preciousevans?_t=ZM-8tpY7S83Lc7&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/_preciousevans?igsh=ZzlnaHE3bnd5YjE5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@_preciousevans"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/precious-evans-995626351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaLinkedinIn />
          </a>
          <Link
            to="/contact"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaFacebookF />
          </Link>
        </div>
      </div>

      {/* Copyright and Policy Links */}
      <div className="text-center mt-10 text-sm text-navGray">
        © 2025 Precious Evans PE.
      </div>
    </footer>
  );
};

export default Footer;
