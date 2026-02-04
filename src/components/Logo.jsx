import React from "react";
import { NavLink } from "react-router-dom";
import '../css/navbar.css'
export function Logo({ className = "logo" }) {
  return(
    <div>
         <NavLink className="logo navbar-brand " to="/" ><span>A</span>MBETSA TECH</NavLink>
    </div>
  )

}