import { Menu, X } from "lucide-react";
import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-[#BE1942]">
      <div className="container px-4 md:px-8 flex justify-between items-center py-3">
        {/* Logo */}
        <div>
          <img src="/Logo-navigate.svg" alt="Logo" />
        </div>

        {/* Navigation Menu (Desktop & Mobile) */}
        <div className="flex items-center gap-10">
          {/* Desktop Navigation */}
          <div className="hidden md:flex text-white gap-10">
            <NavLink to="/" className="nav-text">
              Главный
            </NavLink>
            <NavLink to="/about" className="nav-text">
              О Нас
            </NavLink>
            <NavLink to="/#teachers" className="nav-text">
              Учителя
            </NavLink>
            <NavLink to="/" className="nav-text">
              Цена
            </NavLink>
            <NavLink to="/galery" className="nav-text">
              Галерея
            </NavLink>
            <NavLink to="/offer" className="nav-text">
              Публичная оферта
            </NavLink>
          </div>
        </div>

        {/* Contact Info (Always Visible) */}
        <div className="flex items-center gap-4">
          <img src="icon1.svg" alt="Phone Icon" />
          <div>
            <p className="text-white nav-phone">+998 99 484 22 24</p>
            <div className="flex gap-6 pt-2 justify-center">
              <img src="/icon2.svg" alt="Social 1" />
              <img src="/icon4.svg" alt="Social 2" />
              <img src="/icon3.svg" alt="Social 3" />
            </div>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#9A1535] text-white p-4 space-y-4">
          <NavLink to="/" className="block" onClick={() => setIsOpen(false)}>
            Главный
          </NavLink>
          <NavLink
            to="/about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            О Нас
          </NavLink>
          <NavLink to="/" className="block" onClick={() => setIsOpen(false)}>
            Учителя
          </NavLink>
          <NavLink to="/" className="block" onClick={() => setIsOpen(false)}>
            Цена
          </NavLink>
          <NavLink
            to="/galery"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Галерея
          </NavLink>
          <NavLink
            to="/offer"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Публичная оферта
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default memo(Navbar);
