import React, { memo } from "react";

const Students = () => {
  return (
    <div>
      <section className="px-4 sm:px-8">
        <h2 className="font-extrabold text-2xl sm:text-[49px] leading-7 sm:leading-[59px] text-center pb-5 pt-10 sm:pt-[65px]">
          Наши студенты
        </h2>
        <h3 className="font-medium text-base sm:text-[22px] leading-5 sm:leading-[27px] text-[#5E5E5E] text-center md:px-[210px] pb-10 sm:pb-[80px]">
          это те, кто успешно сдали IELTS, достигнув своих целей и открыв двери
          к новым возможностям. Их успех — результат усердия, целеустремлённости
          и нашей поддержки на каждом этапе обучения.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-5">
            <div className="p-6 bg-[#BE1942] rounded-[20px]">
              <div className="flex items-center gap-4">
                <img src="/ava9.png" alt="" className="w-12 sm:w-auto" />
                <p className="font-bold text-lg sm:text-[27px] leading-6 sm:leading-[33px] text-white">
                  Шерзод Тошматов
                </p>
              </div>
              <p className="font-medium text-sm sm:text-[24px] leading-5 sm:leading-[29px] text-white pt-5 sm:pt-[30px]">
                Navigate English Academy — это лучший центр, где я когда-либо
                учился. Преподаватели профессиональные, объясняют материал
                доступно и интересно. Я заметил, что уровень моего английского
                значительно повысился за несколько месяцев обучения
              </p>
            </div>
            <div className="p-6 bg-[#F7F7F7] rounded-[20px]">
              <div className="flex items-center gap-4">
                <img src="/ava12.png" alt="" className="w-12 sm:w-auto" />
                <p className="font-bold text-lg sm:text-[27px] leading-6 sm:leading-[33px] text-[#1B1B1B]">
                  Александр Иванов
                </p>
              </div>
              <p className="font-medium text-sm sm:text-[24px] leading-5 sm:leading-[29px] text-[#5E5E5E] pt-5 sm:pt-[30px]">
                Navigate English Academy — это лучший центр, где я когда-либо
                учился. Преподаватели профессиональные, объясняют материал
                доступно и интересно. Я заметил, что уровень моего английского
                значительно повысился за несколько месяцев обучения
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="py-5 text-center bg-black text-white rounded-[20px]">
              <p className="font-bold text-3xl sm:text-[68px] leading-8 sm:leading-[82px]">
                1.000
              </p>
              <p className="font-medium text-lg sm:text-[26px] leading-5 sm:leading-[31px]">
                студентов сдавшие IELTS
              </p>
            </div>
            <div className="p-6 bg-[#F7F7F7] rounded-[20px]">
              <div className="flex items-center gap-4">
                <img src="/ava10.png" alt="" className="w-12 sm:w-auto" />
                <p className="font-bold text-lg sm:text-[27px] leading-6 sm:leading-[33px] text-[#1B1B1B]">
                  Нодира Рахмоновна
                </p>
              </div>
              <p className="font-medium text-sm sm:text-[24px] leading-5 sm:leading-[29px] text-[#5E5E5E] pt-5 sm:pt-[30px]">
                Очень благодарна Navigate English Academy за качественное
                обучение! Здесь мне помогли не только улучшить мой английский,
                но и развить уверенность в разговоре. Атмосфера на уроках очень
                приятная, что помогает чувствовать себя комфортно и открыто.
              </p>
            </div>
            <div className="p-6 bg-[#BE1942] rounded-[20px]">
              <div className="flex items-center gap-4">
                <img src="/ava13.png" alt="" className="w-12 sm:w-auto" />
                <p className="font-bold text-lg sm:text-[27px] leading-6 sm:leading-[33px] text-white">
                  Зара Ахмедова
                </p>
              </div>
              <p className="font-medium text-sm sm:text-[24px] leading-5 sm:leading-[29px] text-white pt-5 sm:pt-[30px]">
                Я начала учить английский с нуля, и теперь могу свободно читать
                и понимать фильмы на языке. Преподаватели поддерживают на всех
                этапах обучения, а удобное расписание помогает совмещать учебу с
                другими делами. Очень довольна результатами!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="p-6 bg-[#BE1942] rounded-[20px]">
              <div className="flex items-center gap-4">
                <img src="/ava11.png" alt="" className="w-12 sm:w-auto" />
                <p className="font-bold text-lg sm:text-[27px] leading-6 sm:leading-[33px] text-white">
                  Милана Егорова
                </p>
              </div>
              <p className="font-medium text-sm sm:text-[24px] leading-5 sm:leading-[29px] text-white pt-5 sm:pt-[30px]">
                Прошла курс в Navigate English Academy и осталась очень
                довольна. Занятия проходили в комфортной атмосфере,
                преподаватели всегда готовы помочь и ответить на все вопросы. За
                короткий срок значительно улучшила уровень английского. Очень
                рекомендую всем!
              </p>
            </div>
            <div className="p-6 bg-[#F7F7F7] rounded-[20px]">
              <div className="flex items-center gap-4">
                <img src="/ava14.png" alt="" className="w-12 sm:w-auto" />
                <p className="font-bold text-lg sm:text-[27px] leading-6 sm:leading-[33px] text-[#1B1B1B]">
                  Бахром Абдуллаев
                </p>
              </div>
              <p className="font-medium text-sm sm:text-[24px] leading-5 sm:leading-[29px] text-[#5E5E5E] pt-5 sm:pt-[30px]">
                Учебный центр действительно делает акцент на прогресс каждого
                студента. Я был приятно удивлен результатами после нескольких
                месяцев обучения в Navigate English Academy. Теперь общаться на
                английском для меня стало намного проще и увереннее.
              </p>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 sm:px-[33px] sm:py-[13px] border border-black hover:bg-black hover:text-white rounded-2xl font-bold text-lg sm:text-2xl leading-5 sm:leading-7 my-10 sm:my-[65px] mx-auto">
          Показать больше{" "}
          <span>
            <img src="/down.svg" alt="" />
          </span>
        </button>
      </section>
    </div>
  );
};

export default memo (Students);
