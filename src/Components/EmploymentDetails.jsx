import React from "react";
import { NavLink } from "react-router-dom";

import Header from "./Header";

export default function EmploymentDetails() {
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
        path={"/YourAadress"}
      />
      <div className="mx-[24px] pb-[32px]">
        <div className="w-[100%] h-[8px] border-solid  rounded-[4px] bg-[#EDF4FE] mt-[16px]">
          <div className="w-[60%] h-[8px] border-solid rounded-[4px] bg-[#294A85]"></div>
        </div>
        <h2 className="mt-[27px] text-[#294A85] text-[24px] font-[700] leading-[29px]">
          Employment Details
        </h2>
        <p className="mb-[5px] mt-[27px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Employment Type<span className="text-[red]">*</span>
        </p>

        <select
          name="cars"
          id="cars"
          className="float-right border-[none] w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] text-[#071329] text-[16px] font-[400] pl-[16px]"
        >
          <option value="Salaried">Salaried</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <p className="mb-[0px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Annual Salary<span className="text-[red]">*</span>
        </p>
        <p className="mb-[5px] text-[#747474] text-[14px] font-[400] leading-[22px]">
          Eg: 5,00,000
        </p>
        <input
          type="text"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px]"
        />

        <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
          Current Company Name<span className="text-[red]">*</span>
        </p>
        <input
          type="text"
          placeholder="Sample Company Name"
          className="w-[100%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px]"
        />
        <div>
          <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
            Present Job Duration<span className="text-[red]">*</span>
          </p>
          <input
            type="text"
            className="w-[46%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px]"
          />
          <select
            name="cars"
            id="cars"
            className="float-right border-[none] w-[46%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] text-[#071329] text-[16px] font-[400] pl-[16px]"
          >
            <option value="Years">Years</option>
            <option value="Months">Months</option>
            <option value="Days">Days</option>
          </select>
        </div>
        <div>
          <p className="mb-[5px] text-[14px] font-[500] leading-[22px] text-[#071329]">
            Total Work Experience<span className="text-[red]">*</span>
          </p>
          <input
            type="text"
            className="w-[46%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] pl-[16px]"
          />
          <select
            name="cars"
            id="cars"
            className="float-right border-[none] w-[46%] h-[48px] border-[1px] border-solid border-[#DBDBDB] rounded-[8px] mb-[14px] text-[#071329] text-[16px] font-[400] pl-[16px]"
          >
            <option value="Years">Years</option>
            <option value="Months">Months</option>
            <option value="Days">Days</option>
          </select>
        </div>
        <NavLink to="/CibilCheck">
          <button className="h-[48px] w-[100%] bg-[#294A85] text-[white] mt-[70px]  mx-[auto] block rounded-[8px]">
            Next
          </button>
        </NavLink>
      </div>
    </>
  );
}
