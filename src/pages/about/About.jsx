import React, { memo } from "react";

const About = () => {
  return (
    <div>
      <h2 className="font-extrabold text-[43px] leading-[51px] text-center pt-8 pb-[100px] text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        О нас
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[97px] pb-[126px]">
        <div>
          <h3 className="font-extrabold text-[30px] leading-[38px] sm:text-[35px] md:text-[43px]">
            Добро пожаловать в <span className="text-[#8C1633]">Navigate</span>
          </h3>
          <p className="font-medium text-[18px] leading-[22px] text-[#8A8A8A] pt-5 sm:text-[20px] md:text-[22px]">
            Вы сразу погружаетесь в языковую среду и с каждым занятием общаетесь
            все свободнее. В{" "}
            <span className="text-[#292929] font-bold">NaviGate</span>, мы
            поможем Вам добиться высоких целей в изучении английского языка!
          </p>
          <p className="font-medium text-[18px] leading-[22px] text-[#8A8A8A] pt-5 sm:text-[20px] md:text-[22px]">
            <span className="text-[#292929] font-bold">
              Учебный центр NaviGate
            </span>
            — бесподобный вариант для тех, кто хочет получить желаемое по
            специальной программе, разработанной Оксфордским Университетом. Наша
            методика обучения заключается в индивидуальном подходе к каждому
            студенту, что позволит быстро достичь прогресса в изучении
            английского языка!
          </p>
          <div className="pt-5 flex flex-col sm:flex-row justify-between">
            <div>
              <p className="font-black text-[70px] leading-[80px] sm:text-[100px] sm:leading-[120px]">
                1000
              </p>
              <p className="font-normal text-[30px] leading-[38px] text-[#8A8A8A] sm:text-[44px] sm:leading-[53px]">
                студентов
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <p className="font-black text-[70px] leading-[80px] sm:text-[100px] sm:leading-[120px]">
                10
              </p>
              <p className="font-normal text-[30px] leading-[38px] text-[#8A8A8A] sm:text-[44px] sm:leading-[53px]">
                учителей
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            src="/ava16.png"
            alt="NaviGate"
            className="rounded-2xl w-full sm:w-[350px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default memo (About);
