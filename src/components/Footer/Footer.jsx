import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F]">
      <div className="container px-4 md:px-[83px] pt-[62px] pb-10">
        <div className="flex flex-col md:flex-row md:gap-[138px] gap-6">
          <div className="flex ">
            <img src="/Logo-navigate.svg" alt="Logo" className="self-start md:max-w-[221px] md:h-[89px]" />
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-[109px] text-center md:text-left">
            <div>
              <p className="font-tilda font-normal text-xl leading-8 text-white md:pb-[49px]">
                Категории
              </p>
              <div className="text-white flex flex-col gap-3 md:gap-[49px]">
                <NavLink to="/" className="footer-text">
                  Главный
                </NavLink>
                <NavLink to="/about" className="footer-text">
                  О Нас
                </NavLink>
                <NavLink to="/" className="footer-text">
                  Учителя
                </NavLink>
                <NavLink to="/" className="footer-text">
                  Цена
                </NavLink>
              </div>
            </div>

            <div>
              <p className="font-tilda font-normal text-xl leading-8 text-white pb-3 md:pb-[49px] md:pt-5">
                Контакты
              </p>
              <div className="flex flex-col gap-4 md:gap-[49px] text-white">
                <p className="footer-text">+998 99 484 22 24</p>
               
                <NavLink to="/galery" className="footer-text">
                  Галерея
                </NavLink>
                <NavLink to="/offer" className="footer-text">
                  Публичная оферта
                </NavLink>
              </div>
            </div>
            <div className="md:pt-20">
              <p className="font-bold text-lg leading-7 text-white md: pb-[53px]">
                NaviGate English Academy
              </p>
              <p className="footer-text text-white pb-[53px]">
                navigate.english.academy@gmail.com
              </p>
              <p className="footer-text text-white">
                Monday - Saturday 9:00 - 20:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="flex gap-6 justify-center md:justify-start pt-4 md:pt-0">
            <img src="/icon4.svg" alt="Social 2" />
            <img src="/icon3.svg" alt="Social 3" />
          </div>
          <p className="font-semibold text-sm leading-6 text-white mt-4 md:mt-0 md:mr-28">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
