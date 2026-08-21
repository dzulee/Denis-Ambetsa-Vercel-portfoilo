import React from "react";
import { NavLink } from "react-router-dom";
import '../css/navbar.css'
export function Logo({ className = "logo" }) {
  const logoClassName = ['logo', className].filter(Boolean).join(' ');

  return (
    <NavLink className={logoClassName} to="/" aria-label="Ambetsa Tech home">
      <img className="logo-image" src="/logo.png" alt="Ambetsa Tech" />
    </NavLink>
  );

}