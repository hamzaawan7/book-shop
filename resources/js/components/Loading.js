import React from "react";
import heart from './assets/heart_loader.gif';

export default function Loading() {
  return (
    <div
      style={{
        height: "450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      className="container loading"
    >
      <img src={heart} width="100px" alt="loader"/>
    </div>
  );
}
