import React from "react";
export default function Home() {
  return (
    <>
      <div className=" bg-[url('./assets/image/hero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" h-screen flex flex-col justify-center">
            <p dir="rtl" className="text-right text-2xl md:text-4xl font-bold">
              ASCO للمقاولات العامة
            </p>
            <p className="text-right text-2xl md:text-4xl font-bold">
              نبني لك المستقبل بثقة وجودة
            </p>
          </div>
        </div>
      </div>
      <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group w-fit">
          <p className="text-2xl md:text-4xl font-bold">
            من نحن
          </p>
          <div className="h-[2.5px] bg-yellow-500 w-[40px] md:w-[60px] group-hover:w-[75px] md:group-hover:w-[110px] transition-all duration-300 mt-4" />
        </div>

        <p className="text-base md:text-2xl mt-4">
          نحن شركة ASCO للمقاولات العامة، نقدم حلول هندسية وإنشائية متكاملة
          بخبرة تتجاوز 20 عامًا
        </p>
      </div>
    </>
  );
}
