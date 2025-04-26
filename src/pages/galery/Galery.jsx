import React, { memo, useEffect } from "react";

const Galery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:px-8 px-4">
      <div className="pb-[90px]">
        <h2 className="font-extrabold text-[49px] leading-[59px] text-center pb-5 pt-[65px]">
          Галерея
        </h2>
        <h3 className="font-medium text-[22px] leading-[27px] text-[#5E5E5E] text-center md:px-[280px] pb-[84px]">
          Учебный центр Navigate приглашает вас заглянуть в нашу галерею! Здесь
          вы найдете фотографии наших уютных учебных аудиторий, современных
          технологий, используемых в процессе обучения, а также моменты из жизни
          наших студентов.
        </h3>
        <div className="grid md:grid-cols-2  gap-5">
          <div className="flex flex-col gap-5">
            <img src="/img11.png" alt="" />
            <img src="/img12.png" alt="" />
            <img src="/img13.png" alt="" />
            <img src="/img14.png" alt="" />
            <img src="/img15.png" alt="" />
          </div>
          <div  className="flex flex-col gap-5">
          <img src="/img16.png" alt="" />
          <img src="/img17.png" alt="" />
          <img src="/img18.png" alt="" />
          <img src="/img19.png" alt="" />
          <img src="/img20.png" alt="" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default memo (Galery);
