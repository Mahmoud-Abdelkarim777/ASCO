import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
const getCurrentYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
};
export default function Footer() {
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>logo</div>
          <div>
            <p>About us</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              enim!
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center	md:text-left	">
          <p>Quick links</p>
          <div className="flex flex-col">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">Services</a>
            <a href="#">project</a>
          </div>
        </div>
        <div className="flex flex-col text-center	md:text-left">
          <p>contact</p>
          <div className="flex flex-col">
          <p>1234 fim st. cit state 11345</p>
            <a href="#">info@asco.com</a>
            <a href="#">(123) 456-7990</a>
          </div>
        </div>
        <div className="flex  flex-col text-center	md:text-left">
          <p>follow us</p>
          <div className="flex justify-center md:justify-start gap-4">
            <span><i class="fa-brands fa-square-facebook"></i></span>
            <span><i class="fa-brands fa-square-twitter"></i></span>
            <span><i class="fa-brands fa-square-instagram"></i></span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-cyan-500 h-[2.5px] mt-4"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-4	">&copy; <span className="px-1">{getCurrentYear()}</span>ASCO. All rights reserved.</div>
    </>
  );
}
