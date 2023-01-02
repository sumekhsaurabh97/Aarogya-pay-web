import React from "react";
import Header from "./Header";

export default function CibilCheck() {
  return (
    <>
      <Header
        src={"./assets/images/BackArrow.svg"}
        dis={{ display: "block" }} btnStyle={{width :'24px', height :'24px', backgroundColor :'#071329', borderRadius :'50%'}}
        path={"/EmploymentDetails"}
      />
      <div className="mx-[24px] pb-[32px]">
        <div className="w-[100%] h-[8px] border-solid  rounded-[4px] bg-[#EDF4FE] mt-[16px]">
          <div className="w-[80%] h-[8px] border-solid rounded-[4px] bg-[#294A85]"></div>
        </div>
        <h2 className="mt-[27px] text-[#294A85] text-[24px] font-[700] leading-[29px]">
          Employment Details
        </h2>
        <p className="pr-[24px] mt-[21px] text-[#071329] text-[16px] font-[400] leading-[30px]">
          For checking your CIBIL score, you will be redirected to our lending
          partner’s platform.
        </p>
        <p className="mt-[47px] text-[#071329] text-[16px] font-[400] leading-[30px]">
          Please keep your PAN number ready.
        </p>
        <div className="w-[100%] h-[119px] border-[0px] border-solid border-[#DBDBDB] rounded-[8px] bg-[#EDF4FE] mt-[207px] pl-[16px] pt-[14px]">
          <h2 className="text-[#294A85] text-[16px] font-[700] leading-[22px] mb-[4px]">
            Have any questions? -
          </h2>
          <p className="text-[#294A85] text-[14px] font-[400] leading-[18px] mb-[25px]">
            Get in touch with our support
          </p>
          <p className="text-[#294A85] text-[16px] font-[400] leading-[18px]">
            Call Support :{" "}
            <a href="tel:+91 11 4224 9696" className="underline	">
              +91 11 4224 9696
            </a>
            .
          </p>
        </div>
        <button className="h-[48px] w-[100%] bg-[#294A85] text-[white] mt-[25px]  mx-[auto] block rounded-[8px]">Proceed</button>

      </div>
    </>
  );
}
