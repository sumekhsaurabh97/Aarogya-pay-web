import React from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";

export default function YourAadress() {
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
      />
      <div className="mx-[24px] pb-[32px]">
        <div className="w-[100%] h-[8px] border-solid  rounded-[4px] bg-[#EDF4FE] mt-[16px]">
          <div className="w-[40%] h-[8px] border-solid rounded-[4px] bg-[#294A85]"></div>
        </div>
        <h2 className="mt-[27px] text-[#294A85] text-[24px] font-[700] leading-[29px]">
          Your Address
        </h2>

        <p className="mb-[5px] mt-[27px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Address Type<span className="text-[red]">*</span>
        </p>

        <select
          name="cars"
          id="cars"
          className="float-right border-[none] w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] text-[#071329] text-[16px] font-[400] pl-[16px]"
        >
          <option value="Home with Family" className="">
            Home with Family
          </option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Building<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />

        <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Locality<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />

        <p className=" mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Landmark <i className="font-[400] text-[14px]">(Optional)</i>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />

        <p className=" mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Pincode<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />

        <p className=" mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          State<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />

        <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          City<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px] text-[#071329] text-[16px] font-[400]"
        />
        <NavLink to="/EmploymentDetails">
          <button className="h-[48px] w-[100%] bg-[#294A85] text-[white] mt-[45px]  mx-[auto] block rounded-[8px]">
            Next
          </button>
        </NavLink>
      </div>
    </>
  );
}
