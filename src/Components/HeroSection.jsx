import React from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";

export default function HeroSection() {
  return (
    <>
      <Header dis={{display: "none"}} btnText={"Log In"} />
      <div className=" mx-[24px] bg-gray pb-[32px]">
        <img
          src="./assets/images/Postpone.svg"
          alt=""
          srcset=""
          className="mt-[55px]"
        />
        <ul className="text-lg font-bold text-[#294A85] mt-[14px] mb-[66px] list-disc ml-[24px]">
          <li>Instant Loan for Patients*</li>
          <li>0% Interest</li>
          <li>3 or 6 Months EMIs</li>
        </ul>
        <img src="./assets/images/HomePageImg.svg" alt="" />
        <NavLink to="/MobileVerification">
          <button className="h-[48px] w-[100%] bg-[#294A85] text-[white] mt-[74px]  mx-[auto] block rounded-[8px]">
            Apply Now
          </button>
        </NavLink>
      </div>
    </>
  );
}
