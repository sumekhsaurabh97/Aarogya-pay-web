import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <div className="h-[70px] flex justify-between bg-slate-00 items-center px-4 border-2 border-solid shadow-md">
        <NavLink to={props.path}>
        <img src={props.src} alt="" sizes="" srcset="" style={props.dis}/>
        </NavLink>
        <img className="h-[35px] w-[194px]" src="./assets/images/HeroSection_icon.svg" alt="" srcset="" />
        <button className="text-[14px] font-[700] text-[#294A85]" style={props.btnStyle}>{props.btnText}</button>
      </div>
    </>
  );
}
