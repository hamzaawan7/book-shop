import React from "react";
import heart from './heart_loader.gif';

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
