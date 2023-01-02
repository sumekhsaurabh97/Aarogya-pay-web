import React from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";

export default function MobileVerification(props) {
  return (
    <>
      <Header
        src={"./assets/images/BackArrow.svg"}
        dis={{ display: "block" }}
        btnStyle={{
          width: "24px",
          height: "24px",
          backgroundColor: "#071329",
          borderRadius: "50%",
        }}
        path={props.path}
      />
      <div className="mx-[24px] pb-[32px]">
        <img
          src="./assets/images/Otp.svg"
          alt=""
          srcset=""
          className="mx-[auto] mt-[93px]"
        />
        <p className="text-[24px] font-[700] leading-[29px] text-[#294A85] mt-[67px] mb-[23px]">
          Mobile Verification
        </p>
        <span className="text-[14px] font-[400] leading-[22px] text-[#071329]">
          Indian Mobile Number
        </span>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mt-[6px] pl-[16px]"
        />
        <div style={props.input_display}>
          <p className="mt-[22px] mb-[5px] text-[14px] font-[400] leading-[22px] text-[#071329]">
            Verify OTP
          </p>
          <div className="flex gap-x-[10px]">
            <input
              type="text"
              className="w-[60px] h-[48px] border-[1px] border-solid border-[black] rounded-[8px] text-center"
            />
            <input
              type="text"
              className="w-[60px] h-[48px] border-[1px] border-solid border-[black] rounded-[8px] text-center"
            />
            <input
              type="text"
              className="w-[60px] h-[48px] border-[1px] border-solid border-[black] rounded-[8px] text-center"
            />
            <input
              type="text"
              className="w-[60px] h-[48px] border-[1px] border-solid border-[black] rounded-[8px] text-center"
            />
          </div>
          <p className="text-[#747474] text-[12px] font-[400] leading-[22px] mt-[16px]">
            Resend in 01:00
          </p>
        </div>
        <NavLink to={props.MobileVerification_URL}>
          <button
            className={`h-[48px] w-[100%] bg-[#294A85] text-[white] mx-[auto] block rounded-[8px] ${props.mobVarif_btn_toggle}`}
            style={props.btn_style}
          >
            {props.btn_text}
          </button>
        </NavLink>
      </div>
    </>
  );
}
