import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F]">
      <div className="container px-4 md:px-8 pt-10 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/Logo-navigate.svg" alt="Logo" />
          </div>

          {/* Categories */}
          <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
            <div>
              <p className="font-tilda font-normal text-xl leading-8 text-white pb-2">
                Категории
              </p>
              <div className="text-white flex flex-col gap-3">
                <NavLink to="/" className="footer-text">
                  Главный
                </NavLink>
                <NavLink to="/" className="footer-text">
                  О Нас
                </NavLink>
                <NavLink to="/" className="footer-text">
                  Учителя
                </NavLink>
                <NavLink to="/" className="footer-text">
                  Цена
                </NavLink>
                <NavLink to="/" className="footer-text">
                  Галерея
                </NavLink>
                <NavLink to="/" className="footer-text">
                  Публичная оферта
                </NavLink>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <p className="font-tilda font-normal text-xl leading-8 text-white pb-3">
                Контакты
              </p>
              <div className="flex flex-col gap-4">
                <p className="footer-text text-white">+998 99 484 22 24</p>
                <p className="footer-text text-white">
                  navigate.english.academy@gmail.com
                </p>
                <p className="footer-text text-white">
                  Monday - Saturday 9:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="flex gap-6 justify-center md:justify-start pt-4 md:pt-0">
            <img src="/icon2.svg" alt="Social 1" />
            <img src="/icon4.svg" alt="Social 2" />
            <img src="/icon3.svg" alt="Social 3" />
          </div>
          <p className="font-semibold text-sm leading-6 text-white mt-4 md:mt-0">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
