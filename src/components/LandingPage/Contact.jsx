import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <h2 className="font-extrabold text-2xl md:text-[49px] leading-[29px] md:leading-[59px] pt-10 md:pt-[64px] pb-5 md:pb-[21px] text-center">
          Контакты
        </h2>
        <div className="bg-[#2D2D2D] px-4 md:px-[100px] py-8 md:pt-[109px] md:pb-[46px]">
          <div className="flex justify-center items-center h-screen ">
            <div className="w-full max-w-[1000px] shadow-lg rounded-2xl">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1177708528615!2d69.33403077605826!3d41.36634487128844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef510f36cfc23%3A0x4b76065a26061f94!2sBuyuk%20Ipak%20Yuli%20Street%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1707652345678"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col md:flex-row justify-between pt-10 md:pt-[81px] gap-8 md:gap-0">
            <div>
              <h3 className="font-bold text-xl md:text-[49px] leading-[29px] md:leading-[59px]">
                Адрес:
              </h3>
              <p className="font-bold text-sm md:text-base leading-5 pt-2 md:pt-[10px]">
                Мирзо-Улугбекский район, улица Буюк <br /> ипак йули, 111.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[49px] leading-[29px] md:leading-[59px]">
                E-mail:
              </h3>
              <p className="font-bold text-sm md:text-base leading-5 pt-2 md:pt-[10px]">
                navigate.english.academy@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[49px] leading-[29px] md:leading-[59px]">
                Номер телефона:
              </h3>
              <p className="font-bold text-sm md:text-base leading-5 pt-2 md:pt-[10px]">
                +998 99 484 22 24
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
