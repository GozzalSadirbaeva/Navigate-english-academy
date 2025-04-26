import React, { memo, useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Contact from "../../components/LandingPage/Contact";
import Price from "../../components/LandingPage/Price";
import Students from "../../components/LandingPage/Students";
import Teachers from "../../components/LandingPage/Teachers";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const teachersRef = useRef(null);
  const priceRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "Какой уровень английского я получу после прохождения курса?",
      answer:
        "После завершения курса и успешной сдачи экзаменов вы получите тот уровень, который вы изначально выбрали. Мы доведем вас до результата!",
    },
    {
      question: "Сколько надо времени, чтобы выучить английский с нуля?",
      answer:
        "Здесь все зависит исключительно от индивидуальных способностей и уровня, которого желает достичь ученик. Примерные сроки мы сможем озвучить только после проведения тестирования и личной беседы.",
    },
    {
      question: "Как записаться на курс?",
      answer:
        "Вы можете оставить заявку на сайте или связаться с нами по указанным контактам. Мы предложим вам пройти бесплатное тестирование для определения вашего уровня.",
    },
    {
      question: "Какие дополнительные материалы входят в курс?",
      answer:
        "В стоимость курса уже включены учебники NaviGate Student Book, домашние задания из NaviGate Homebook и доступ к нашей онлайн-базе материалов.",
    },
    {
      question:
        "Какие уровни английского языка предлагаются на курсах Navigate?",
      answer:
        "Мы предлагаем курсы для всех уровней: от начинающих (Beginner) до продвинутых (Advanced). Также у нас есть специализированные курсы для подготовки к экзаменам, например IELTS.",
    },
    {
      question: "Какие преподаватели ведут курсы?",
      answer:
        "Наши преподаватели — сертифицированные специалисты с опытом работы в международных школах и сертификатами TEFL, TESOL или CELTA.",
    },
  ];
  const [activeIndexes, setActiveIndexes] = useState({});
  const toggleAnswer = (index) => {
    if (activeIndex === index) setActiveIndex(null);
    else setActiveIndex(index);
    console.log(index, activeIndex);

    setActiveIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div>
      <section className="bg-img">
        <div className="pt-10 pb-10 px-5 md:pt-[204px] md:pb-[206px] md:pl-[720px]">
          <div className="bg-[#232323B0] md:w-[486px] w-full px-5 md:px-[33px] py-5 md:py-[25px] rounded-[20px] text-white bg-blur">
            <h3 className="font-bold text-[22px] md:text-[27px] leading-7 md:leading-8 text-center md:text-left">
              ЗАПИСАТЬСЯ НА ПЕРВЫЙ УРОК!{" "}
            </h3>
            <h4 className="font-medium text-[16px] md:text-[20px] leading-[24px] md:leading-[27px] pt-[6px] pb-[17px] text-center md:text-left">
              Заполните форму, и наш консультант скоро выйдет с вами на связь.
            </h4>
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Введите своё имя"
                className="px-5 md:px-7 py-3 rounded-[20px] w-full text-black"
              />
              <input
                type="text"
                placeholder="+998 (__) ___  - ___ - ___"
                className="px-5 md:px-7 py-3 rounded-[20px] w-full text-black"
              />
              <button className="px-8 md:px-11 py-[10px] bg-[#BE1942] hover:bg-[#932D46] text-white rounded-[20px] md:w-[188px] w-full md:self-center">
                Записаться
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <h2 className="font-extrabold text-[32px] md:text-[49px] leading-[42px] md:leading-[59px] text-center pb-5">
          Что делает нас особенными?
        </h2>
        <h3 className="font-medium text-[18px] md:text-[22px] leading-[24px] md:leading-[27px] text-[#5E5E5E] text-center px-5 md:px-[230px] pb-10 md:pb-[86px]">
          Учебный центр Navigate предоставляет высококачественное обучение
          английскому языку, знания и навыки которого позволят с уверенностью
          встречать настоящее и будущее! NaviGate сделает так, что Вы будете
          готовы к уверенному общению на английском языке!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          <div className="flex flex-col gap-5">
            <div className="px-5 md:px-[36px] pt-5 md:pt-[36px] pb-5 md:pb-[17px] bg-[#F7F7F7] rounded-[20px]">
              <div className="bg-bookmark w-[63px] h-[63px] rounded-full">
                <img src="/bookmark.svg" alt="" className="px-5 py-5" />
              </div>
              <p className="font-semibold text-xl md:text-3xl leading-8 md:leading-9 py-5">
                Регулярно проводимые мероприятия.
              </p>
              <p className="font-normal text-sm md:text-base leading-5">
                Запланированные активности, которые проходят с установленной
                периодичностью, создавая стабильность и ожидаемость для
                участников.
              </p>
            </div>
            <div className="px-5 md:px-[36px] pt-5 md:pt-[36px] pb-5 md:pb-[17px] bg-[#F7F7F7] rounded-[20px]">
              <div className="bg-comment w-[63px] h-[63px] rounded-full">
                <img src="/comment.svg" alt="" className="px-5 py-5" />
              </div>
              <p className="font-semibold text-xl md:text-3xl leading-8 md:leading-9 py-5">
                Дополнительный Support.
              </p>
              <p className="font-normal text-sm md:text-base leading-5">
                Дополнительная поддержка, предоставляемая для решения
                возникающих вопросов или трудностей в процессе обучения или
                работы.
              </p>
            </div>
          </div>
          <div className="p-5 md:p-[38px] bg-[#F7F7F7] rounded-[20px]">
            <img src="/image.png" alt="" />
            <p className="font-semibold text-xl md:text-3xl leading-8 md:leading-9 py-5">
              Экспертные наставники.
            </p>
            <p className="font-normal text-sm md:text-base leading-5">
              Высококвалифицированные специалисты, обладающие глубокими знаниями
              и богатым опытом в своей области.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="px-5 md:px-[36px] pt-5 md:pt-[36px] pb-5 md:pb-[17px] bg-[#F7F7F7] rounded-[20px]">
              <div className="bg-star w-[63px] h-[63px] rounded-full">
                <img src="/fstar.svg" alt="" className="px-5 py-5" />
              </div>
              <p className="font-semibold text-xl md:text-3xl leading-8 md:leading-9 py-5">
                Навыки Business English.
              </p>
              <p className="font-normal text-sm md:text-base leading-5">
                Позволят вам комфортно чувствовать себя в любой компании, а
                также уверенно проводить переговоры с иностранными партнерами
                или потенциальными клиентами.
              </p>
            </div>
            <div className="px-5 md:px-[36px] pt-5 md:pt-[36px] pb-5 md:pb-[17px] bg-[#F7F7F7] rounded-[20px]">
              <div className="bg-volume w-[63px] h-[63px] rounded-full">
                <img src="/volume.svg" alt="" className="px-5 py-5" />
              </div>
              <p className="font-semibold text-xl md:text-3xl leading-8 md:leading-9 py-5">
                Speaking club и Debate Club.
              </p>
              <p className="font-normal text-sm md:text-base leading-5">
                Место где вы можете развивать свою речь и воспринимать
                английский язык на слух, обсуждая различные темы.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Teachers />
      <Price />
      <Students />

      <section className="bg-[#BE1942]">
        <div className="bg-img2 py-12 md:py-[150px] text-center px-4 md:px-[150px]">
          <p className="font-bold text-2xl md:text-[40px] leading-[32px] md:leading-[53px] text-white">
            ЗАПИШИТЕСЬ НА ПЕРВОЕ ЗАНЯТИЕ
          </p>
          <p className="font-normal text-base md:text-[23px] leading-[24px] md:leading-[33px] pb-5 md:pb-10 text-white pt-4 md:pt-[14px]">
            Запишитесь на первое занятие в Navigate English Academy! Вас ждет
            индивидуальный подход, оценка уровня английского языка и знакомство
            с курсом. Начните обучение с профессиональными преподавателями и
            достигайте реальных результатов!
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[22px] justify-center md:justify-between">
            <div className="flex gap-4 md:gap-[17px] px-4 py-3 md:px-[32px] md:py-[37px] text-[#7E868E] font-normal text-sm md:text-xl leading-[30px] bg-[#F2F6FA] rounded-lg w-full md:w-[309px]">
              <img src="/user.svg" alt="User" />
              <p>Ваше имя</p>
            </div>
            <div className="flex gap-4 md:gap-[17px] px-4 py-3 md:px-[32px] md:py-[37px] text-[#7E868E] font-normal text-sm md:text-xl leading-[30px] bg-[#F2F6FA] rounded-lg w-full md:w-[309px]">
              <img src="/call.svg" alt="Phone" />
              <p>Номер телефона</p>
            </div>
            <div className="px-4 py-3 md:px-[32px] md:py-[37px] text-white bg-[#000000] hover:bg-[#6A6A6A] rounded-lg w-full md:w-[309px]">
              <p className="text-center font-bold text-sm md:text-xl leading-[30px]">
                Записаться
              </p>
            </div>
          </div>
          <div className="pt-4 md:pt-7 flex justify-center gap-1">
            <img src="/check.svg" alt="Check" />
            <p className="font-normal text-xs md:text-sm leading-4 text-white text-center">
              Нажимая на кнопку, вы соглашаетесь с условиями обработки
              персональных данных
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <section className="pb-10 md:pb-[150px]">
        <h2 className="font-extrabold text-2xl md:text-[49px] leading-[29px] md:leading-[59px] text-center pb-5 pt-10 md:pt-[115px]">
          FAQ
        </h2>
        <h3 className="font-medium text-base md:text-[22px] leading-[24px] md:leading-[27px] text-[#5E5E5E] text-center px-4 md:px-[210px] pb-10 md:pb-[80px]">
          Здесь вы найдете ответы на основные вопросы о курсах и обучении в
          Navigate English Academy. Если у вас есть дополнительные вопросы,
          свяжитесь с нами!
        </h3>
        <div className="max-w-4xl mx-auto p-4 md:p-10 pb-10 md:pb-[145px] bg-[#F7F7FB] rounded-[20px]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {questionsAndAnswers.map((item, index) => (
              <div key={index}>
                <div className="border border-gray-300 rounded-xl p-4 hover:shadow-lg transition duration-200">
                  <button
                    className="w-full text-left flex justify-between items-center text-gray-800 font-medium"
                    onClick={() => toggleAnswer(index)}
                  >
                    {item.question}
                    <span
                      className={`ml-4 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      <CiCirclePlus size="41px" />
                    </span>
                  </button>
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-600">{item.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Home);
