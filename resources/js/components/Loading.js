import React from "react";
import heart from './heart_loader.gif';

export default function Loading() {
  const { t, ready } = useTranslation(null, { useSuspense: false });
  return ready === false ? (
    Loading
  ) : (
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
