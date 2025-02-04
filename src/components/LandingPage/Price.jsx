import React, { memo } from "react";

const Price = () => {
  const courses = [
    {
      title: "General English",
      image: "/eng.png",
      price: "750.000 сум",
      color: "#BE1942",
      check: "/red.svg",

      hoverColor: "#932D46",
      features: [
        "Мы предлагаем 4 уровня обучения (от Beginner до Intermediate), каждый из которых длится всего 3 месяца – быстрый старт к уверенности в языке.",
        "Занятия проходят 3 раза в неделю по 80 минут, с использованием лучших программ от Oxford University Press.",
        "Каждый студент получает комплект учебных материалов: учебник и персональную рабочую тетрадь.",
        "Каждое воскресенье вас ждут увлекательные мероприятия: Movie Day, Speaking Club, дебаты и многое другое – учите язык в реальной жизни!",
        "Мы всегда на связи: учитель поможет разобраться с пропущенным материалом или сложными темами. При необходимости – дополнительные занятия по предварительному запросу включены в стоимость.",
      ],
    },
    {
      title: "IELTS Preparation",
      image: "/ielts.png",
      price: "770.000 сум",
      color: "#2D3194",
      check: "/blue.svg",
      features: [
        "Узнайте всё о формате IELTS: от структуры экзамена до ключевых требований.",
        "Освойте эффективные стратегии для достижения максимального результата.",
        "Примите участие в Mock Exams, которые помогут вам почувствовать себя на реальном экзамене.",
        "Оптимальная продолжительность занятий – 80 минут – обеспечивает глубокое погружение в материал.",
        "По воскресеньям мы приглашаем вас на разговорные клубы, игровые занятия и интерактивные тренировки – учиться можно весело и полезно!",
      ],
    },
    {
      title: "Individual Courses",
      image: "/ind.png",
      price: "2.000.000 сум",
      color: "#BE1942",
      check: "/red.svg",
      hoverColor: "#932D46",
      features: [
        "Курсы включают все уровни от Beginner до Intermediate, а также подготовку к IELTS.",
        "Вы получите всё необходимое: наши книги, рабочие тетради и дополнительные материалы для закрепления знаний.",
        "Вы сами выбираете темп обучения, а наши уроки проходят face-to-face – максимальная индивидуализация!",
        "Продолжительность каждого занятия – 80 минут, чтобы эффективно освоить программу.",
        "Присоединяйтесь к мероприятиям по воскресеньям: Speaking Clubs, Mock Exams, Movie Days, вечеринки и дебаты – всё для вашей мотивации и прогресса!",
      ],
    },
  ];

  return (
    <div id="price-section">
      <section className="pb-[60px] md:px-8 px-4">
        <h2 className="font-extrabold text-[32px] md:text-[49px] leading-[42px] md:leading-[59px] text-center pb-5 pt-[65px]">
          Цены
        </h2>
        <h3 className="font-medium text-[16px] md:text-[22px] leading-[22px] md:leading-[27px] text-[#5E5E5E] text-center px-5 md:px-[230px] pb-10 md:pb-[94px]">
          разработанные для всех уровней подготовки, с фокусом на практические
          навыки и глубокое понимание материала. Мы предлагаем гибкий график и
          индивидуальный подход для каждого студента.
        </h3>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[88px] px-5 md:px-0">
          <div className="bg-[#F7F7F7] rounded-[10px]">
            <img src="/eng.png" alt="" className="w-full" />
            <div className="px-5 md:px-[21px] pb-8 md:pb-11 flex flex-col justify-between">
              <div>
                <p className="font-bold text-lg md:text-xl leading-6 md:leading-[30px] text-center pt-5 md:pt-[31px] pb-3 md:pb-[14px]">
                  General English
                </p>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Мы предлагаем 4 уровня обучения (от Beginner до
                    Intermediate), каждый из которых длится всего 3 месяца –
                    быстрый старт к уверенности в языке.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Занятия проходят 3 раза в неделю по 80 минут, с
                    использованием лучших программ от Oxford University Press.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Каждый студент получает комплект учебных материалов: учебник
                    и персональную рабочую тетрадь.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Каждое воскресенье вас ждут увлекательные мероприятия: Movie
                    Day, Speaking Club, дебаты и многое другое – учите язык в
                    реальной жизни!
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Мы всегда на связи: учитель поможет разобраться с
                    пропущенным материалом или сложными темами. При
                    необходимости – дополнительные занятия по предварительному
                    запросу включены в стоимость.
                  </p>
                </div>
              </div>
              <div className=" ">
                <p className="font-extrabold text-[28px] md:text-[34px] leading-[36px] md:leading-[48px] pt-4  pb-3 text-center">
                  750.000 сум
                </p>
                <button className="px-5 md:px-[94px] py-2 md:py-[10px] bg-[#BE1942] hover:bg-[#932D46] rounded-[20px] text-white flex place-self-center">
                  Записаться
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-[10px]">
            <img src="/ielts.png" alt="" className="w-full" />
            <div className="h-[84%] px-5 md:px-[21px] pb-8 md:pb-11 flex flex-col justify-between ">
              <div>
                <p className="font-bold text-lg md:text-xl leading-6 md:leading-[30px] text-center pt-5 md:pt-[31px] pb-3 md:pb-[14px]">
                  IELTS Preparation
                </p>
                <div className="flex gap-3 pb-4">
                  <img src="/blue.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Узнайте всё о формате IELTS: от структуры экзамена до
                    ключевых требований.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/blue.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Освойте эффективные стратегии для достижения максимального
                    результата.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/blue.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Примите участие в Mock Exams, которые помогут вам
                    почувствовать себя на реальном экзамене.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/blue.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Оптимальная продолжительность занятий – 80 минут –
                    обеспечивает глубокое погружение в материал.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/blue.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    По воскресеньям мы приглашаем вас на разговорные клубы,
                    игровые занятия и интерактивные тренировки – учиться можно
                    весело и полезно!
                  </p>
                </div>
              </div>

              <div className="">
                <p className="font-extrabold text-[28px] md:text-[34px] leading-[36px] md:leading-[48px] pb-3 text-center pt-4 ">
                  770.000 сум
                </p>
                <button className="px-5 md:px-[94px] py-2 md:py-[10px] bg-[#2D3194] rounded-[20px] text-white flex place-self-center">
                  Записаться
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-[10px]">
            <img src="/ind.png" alt="" className="w-full" />
            <div className="px-5 md:px-[21px] pb-8 md:pb-11 flex flex-col justify-between h-[84%]">
              <div>
                <p className="font-bold text-lg md:text-xl leading-6 md:leading-[30px] text-center pt-5 md:pt-[31px] pb-3 md:pb-[14px]">
                  Individual Courses
                </p>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Курсы включают все уровни от Beginner до Intermediate, а
                    также подготовку к IELTS.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Вы получите всё необходимое: наши книги, рабочие тетради и
                    дополнительные материалы для закрепления знаний.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Вы сами выбираете темп обучения, а наши уроки проходят
                    face-to-face – максимальная индивидуализация!
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Продолжительность каждого занятия – 80 минут, чтобы
                    эффективно освоить программу.
                  </p>
                </div>
                <div className="flex gap-3 pb-4">
                  <img src="/red.svg" alt="" className="w-5 h-5" />
                  <p className="font-normal text-sm leading-5">
                    Присоединяйтесь к мероприятиям по воскресеньям: Speaking
                    Clubs, Mock Exams, Movie Days, вечеринки и дебаты – всё для
                    вашей мотивации и прогресса!
                  </p>
                </div>
              </div>
              <div className="relative ">
                <p className="font-extrabold text-[28px] md:text-[34px] leading-[36px] md:leading-[48px] pt-4 pb-3 text-center">
                  2.000.000 сум
                </p>
                <button className="px-5 md:px-[94px] py-2 md:py-[10px] bg-[#BE1942] hover:bg-[#932D46] rounded-[20px] text-white flex place-self-center">
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[88px] px-5 md:px-0">
          {courses.map((course, index) => (
            <div key={index} className="bg-[#F7F7F7] rounded-[10px]">
              <img src={course.image} alt="" className="w-full" />
              <div className="px-5 md:px-[21px] pb-8 md:pb-11 flex flex-col justify-between md:h-[84%]">
                <div>
                  <p className="font-bold text-lg md:text-xl leading-6 md:leading-[30px] text-center pt-5 md:pt-[31px] pb-3 md:pb-[14px]">
                    {course.title}
                  </p>
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex gap-3 pb-4">
                      <img src={course.check} alt="" className="w-5 h-5" />
                      <p className="font-normal text-sm leading-5">{feature}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-extrabold text-[28px] md:text-[34px] leading-[36px] md:leading-[48px] pt-4 pb-3 text-center">
                    {course.price}
                  </p>
                  <button
                    className="px-5 md:px-[94px] py-2 md:py-[10px] rounded-[20px] text-white flex place-self-center"
                    style={{ backgroundColor: course.color }}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Price);
