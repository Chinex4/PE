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
    <footer className="bg-[#171717] text-[#F5E9DC] py-8 space-y-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-2 lg:mb-0">
          <NavLink to="/">
            <img
              loading="lazy"
              src={"/images/logo.svg"}
              alt="Logo"
              className="logo w-[130px]"
            />
          </NavLink>
        </div>
      </div>

      {/* Copyright and Policy Links */}
      <div className="text-center text-sm text-navGray">
        © 2025 Precious Evans PE.
      </div>
    </footer>
  );
};

export default Footer;
