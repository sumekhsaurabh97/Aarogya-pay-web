import React, { useRef } from "react";
// import { useRef } from "react";
import Header from "./Header";

export default function DetailsForm() {
  return (
    <>
      <Header
        src={"./assets/images/BackArrow.svg"}
        dis={{ display: "block" }}
        btnStyle={{width :'24px', height :'24px', backgroundColor :'#071329', borderRadius :'50%'}}
      />
      <div className="mx-[24px] pb-[32px]">
        <div className="w-[100%] h-[8px] border-solid  rounded-[4px] bg-[#EDF4FE] mt-[16px]">
          <div className="w-[20%] h-[8px] border-solid rounded-[4px] bg-[#294A85]"></div>
        </div>
        <h2 className="mt-[27px] text-[#294A85] text-[24px] font-[700] leading-[29px]">
          Enter your Details
        </h2>
        <p className="mt-[27px] mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          First Name<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />
        <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Last Name<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />
        <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Date of Birth<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px]"
        />
        <p className="mb-[5px] mt-[31px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Select Gender<span className="text-[red]">*</span>
        </p>
        <div className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] flex items-center pl-[16px] mb-[8px]">
          <label class="checkbox-container text-[14px] font-[500] leading-[22px] text-[#071329]">
            Male
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <span class="checkmark" for="html"></span>
          </label>
        </div>
        <div className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] flex items-center pl-[16px] mb-[8px]">
          <label class="checkbox-container text-[14px] font-[500] leading-[22px] text-[#071329]">
            Female
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <span class="checkmark" for="html"></span>
          </label>
        </div>
        <div className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] flex items-center pl-[16px]">
          <label class="checkbox-container text-[14px] font-[500] leading-[22px] text-[#071329]">
            Other
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <span class="checkmark" for="html"></span>
          </label>
          <br></br>
        </div>
        <button className="h-[48px] w-[100%] bg-[#294A85] text-[white] mt-[67px]  mx-[auto] block rounded-[8px]">
          Next
        </button>
      </div>
    </>
  );
}
