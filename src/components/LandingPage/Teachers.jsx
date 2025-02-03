import React, { memo } from "react";

const Teachers = () => {
  return (
    <div id="teachers">
      <section className="pb-[65px] md:px-8 px-4">
        <h2 className="font-extrabold text-[32px] md:text-[49px] leading-[42px] md:leading-[59px] text-center pb-5 pt-[65px]">
          Наши учителя
        </h2>
        <h3 className="font-medium text-[18px] md:text-[22px] leading-[24px] md:leading-[27px] text-[#5E5E5E] text-center px-5 md:px-[230px] pb-10 md:pb-[94px]">
          которые обладают глубокими знаниями и опытом, обеспечивая качественное
          обучение и индивидуальный подход к каждому студенту.
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 px-5 md:px-0">
          <div className="flex flex-col gap-5 md:gap-[5px] w-full md:w-[315px] mx-auto md:mx-0">
            <div className="flex gap-[14px] p-4 bg-[#F8F9FA] rounded-[20px]">
              <img
                src="/ava4.png"
                alt=""
                className="w-[50px] h-[50px] md:w-auto md:h-auto"
              />
              <div>
                <p className="font-semibold text-lg md:text-[26px] leading-[31px]">
                  Mr. Ne'mat
                </p>
                <p className="font-normal text-base md:text-xl leading-6 text-[#5D5D5D] pt-[10px]">
                  IELTS: 7.5
                </p>
              </div>
            </div>
            <div className="flex gap-[14px] p-4 bg-[#F8F9FA] rounded-[20px]">
              <img
                src="/ava5.png"
                alt=""
                className="w-[50px] h-[50px] md:w-auto md:h-auto"
              />
              <div>
                <p className="font-semibold text-lg md:text-[26px] leading-[31px]">
                  Mr. Abror
                </p>
                <p className="font-normal text-base md:text-xl leading-6 text-[#5D5D5D] pt-[10px]">
                  IELTS: 8.0
                </p>
              </div>
            </div>
            <div className="flex gap-[14px] p-4 bg-[#F8F9FA] rounded-[20px]">
              <img
                src="/ava6.png"
                alt=""
                className="w-[50px] h-[50px] md:w-auto md:h-auto"
              />
              <div>
                <p className="font-semibold text-lg md:text-[26px] leading-[31px]">
                  Mr. Shokhrukh
                </p>
                <p className="font-normal text-base md:text-xl leading-6 text-[#5D5D5D] pt-[10px]">
                  IELTS: 8.0
                </p>
              </div>
            </div>
            <div className="flex gap-[14px] p-4 bg-[#F8F9FA] rounded-[20px]">
              <img
                src="/ava7.png"
                alt=""
                className="w-[50px] h-[50px] md:w-auto md:h-auto"
              />
              <div>
                <p className="font-semibold text-lg md:text-[26px] leading-[31px]">
                  Mr. Aziz
                </p>
                <p className="font-normal text-base md:text-xl leading-6 text-[#5D5D5D] pt-[10px]">
                  IELTS: 7.5
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/ava8.png" alt="" className="" />
          </div>
          <div>
            <p className="font-medium text-sm md:text-[17px] leading-5 text-[#333333] pb-5 md:pb-14">
              Мудрый, добрый, но одновременно один из требовательных
              преподавателей в нашей академии.
              <br />• Опыт работы- 6 лет <br /> • Результат IELTS: 7.5 <br /> •
              Получил степень бакалавра в одном из ТОПовых Университетов
              Узбекистан, а степень магистра в Германии <br /> •
              Усовершенствовал свои профессиональные навыки на основе
              Оксфордских методов. Хочешь покорять вершины английского языка,
              тогда Mr. Ne'mat ждет тебя в NaviGate English Academy!
            </p>
            <div className="flex gap-5 justify-center md:justify-start">
              <div className="bg-[#F7F7F7] rounded-[20px] flex p-5 relative">
                <div>
                  <p className="font-extrabold text-3xl md:text-[46px] leading-[40px] md:leading-[55px]">
                    6+
                  </p>
                  <p className="text-[#5C5C5C] font-normal text-base md:text-xl leading-[22px]">
                    years of experience
                  </p>
                </div>
                <img
                  src="/grey.svg"
                  alt=""
                  className="absolute right-2 md:right-5 top-2 md:top-4"
                />
              </div>
              <div className="bg-[#BE1942] text-white rounded-[20px]  flex p-5 relative">
                <div>
                  <p className="font-extrabold text-3xl md:text-[46px] leading-[40px] md:leading-[55px]">
                    500+
                  </p>
                  <p className="font-normal text-base md:text-xl leading-[22px]">
                    students studied
                  </p>
                </div>
                <img
                  src="/white.svg"
                  alt=""
                  className="absolute right-2 md:right-5 top-2 md:top-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-8 px-4">
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[35px] bg-[#F7F7F7] rounded-[10px] p-4 md:p-0">
          <img
            src="/corporate.png"
            alt=""
            className="rounded-[10px] w-full md:w-auto "
          />
          <div>
            <p className="font-bold text-[24px] md:text-[37px] leading-[32px] md:leading-[52px] pb-3 pt-[15px] md:pt-[25px]">
              Corporate English
            </p>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[25px]">
              <div className="flex flex-col gap-[20px] md:gap-[33px]">
                <div className="flex gap-3">
                  <img
                    src="/red.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Мы предоставляем учебники и рабочие тетради, необходимые для
                    успешного прохождения курса.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/red.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Мы предоставляем учебники и рабочие тетради, необходимые для
                    успешного прохождения курса.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[10px]">
                <div className="flex gap-3">
                  <img
                    src="/red.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Мы предоставляем учебники и рабочие тетради, необходимые для
                    успешного прохождения курса.
                  </p>
                </div>
                <p className="font-extrabold text-[28px] md:text-[34px] leading-[38px] md:leading-[48px] pt-[15px] md:pt-[10px] pb-3 text-center">
                  800.000 сум
                </p>
                <button className="px-8 py-2 bg-[#BE1942] hover:bg-[#932D46] rounded-[20px] md:w-[300px] justify-center text-white flex place-self-center">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[30px] md:pt-[50px] md:px-8 px-4">
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[35px] bg-[#F7F7F7] rounded-[10px] p-4 md:p-0">
          <img
            src="/kids.png"
            alt=""
            className="rounded-[10px] w-full md:w-auto "
          />
          <div>
            <p className="font-bold text-[24px] md:text-[37px] leading-[32px] md:leading-[52px] pb-3 pt-[15px] md:pt-[25px]">
              English for Kids
            </p>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[35px]">
              <div className="flex flex-col gap-[20px] md:gap-[33px]">
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Уровни, адаптированные к возрасту и навыкам: Мы предлагаем
                    курсы для детей от 6 до 12 лет, начиная с самого простого
                    уровня. Каждое занятие построено так, чтобы ребенок
                    чувствовал себя уверенно и комфортно.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Игровой формат занятий: Ваш ребенок будет участвовать в
                    играх, петь песни, рисовать, разыгрывать сценки и смотреть
                    мультфильмы – все для активного погружения в язык.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Игровой формат занятий: Ваш ребенок будет участвовать в
                    играх, петь песни, рисовать, разыгрывать сценки и смотреть
                    мультфильмы – все для активного погружения в язык.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[20px]">
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Игровой формат занятий: Ваш ребенок будет участвовать в
                    играх, петь песни, рисовать, разыгрывать сценки и смотреть
                    мультфильмы – все для активного погружения в язык.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Мини-группы: Небольшое количество учеников в группе (до 8
                    человек) позволяет уделить внимание каждому ребенку.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Все материалы включены в стоимость: Учебники, рабочие
                    тетради и дополнительные задания предоставляются каждому
                    ученику.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="/blue.svg"
                    alt=""
                    className="mb-auto w-[20px] h-[20px]"
                  />
                  <p className="font-normal text-sm leading-5">
                    Еженедельные тематические мероприятия: Каждый ребенок сможет
                    проявить себя на Speaking Days, творческих мастер-классах,
                    мини-дебатах или просмотрах мультфильмов на английском.
                  </p>
                </div>
              </div>
            </div>
            <p className="font-extrabold text-[28px] md:text-[34px] leading-[38px] md:leading-[48px] pt-[15px] md:pt-[22px] pb-3 text-center">
              680.000 сум
            </p>
            <button className="px-8 py-2 bg-[#2D3194] rounded-[20px] mb-[22px] md:w-[300px] justify-center text-white flex place-self-center">
              Записаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo (Teachers);
