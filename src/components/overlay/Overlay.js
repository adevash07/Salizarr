import React from "react";
import "./overlay.scss";

export default function Overlay({ children, className }) {
  return <div className={`overlay ${className}`}>{children}</div>;
}
