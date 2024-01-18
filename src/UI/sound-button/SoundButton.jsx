import React, { useState } from "react";

const SoundButton = ({ name, handlePress }) => {
  const [activeBtn, setActiveBtn] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (e) => {
      handlePress(e);
      if (e.key === name) {
        setActiveBtn(true);
      }
    });
    window.addEventListener("keyup", () => {
      setActiveBtn(false);
    });
  }
  return (
    <>
      <button
        onKeyDown={(e) => {
          handlePress(e);
        }}
        className={`mx-5 p-5 box-border w-[80px] text-center bg-slate-400 ${
          activeBtn ? "border-2 border-red-500" : ""
        }`}
      >
        {name}
      </button>
    </>
  );
};

export default SoundButton;
