"use client";
import { useState } from "react";
import img from "../../assests/images/samsung-uk-hBFyqMmcRS4-unsplash.jpg";
import Image from "next/image";
const ImagePage = () => {
  const [paddingValue, setPaddingValue] = useState(50);
  const [blurValue, setBlurValue] = useState(0);
  const [bgColorValue, setBgColorValue] = useState("#000");

  const handlePaddingChange = (e) => {
    const newValue = e.target.value;
    setPaddingValue(parseInt(newValue));
    console.log(paddingValue);
  };

  const handleBgColorChange = (e) => {
    console.log(e.target.value);
    setBgColorValue(e.target.value);
  };

  const handleBlurChange = (e) => {
    setBlurValue(e.target.value);
  };

  return (
    <section className="container flex justify-center items-center flex-col">
      <div>
        <div className="flex justify-between items-center">
          <input
            type="range"
            id="padding"
            className=" my-7 mr-5 cursor-pointer"
            min={20}
            max={100}
            onChange={(e) => handlePaddingChange(e)}
            onClick={(e) => handlePaddingChange(e)}
          />
          <label htmlFor="padding" className="cursor-pointer font-bold ">
            Padding
          </label>
        </div>

        <div className="flex justify-between items-center">
          <input
            type="range"
            id="blur"
            className="my-7 mr-5 cursor-pointer"
            min={0}
            max={10}
            onChange={(e) => handleBlurChange(e)}
            onClick={(e) => handleBlurChange(e)}
          />
          <label htmlFor="blur" className="cursor-pointer font-bold ">
            Blur
          </label>
        </div>

        <div className="flex items-center flex-col my-6">
          <input
            type="color"
            id="color"
            className=" cursor-pointer"
            onChange={(e) => handleBgColorChange(e)}
            onClick={(e) => handleBgColorChange(e)}
          />
          <label htmlFor="color" className="cursor-pointer font-bold ">
            Color
          </label>
        </div>
      </div>
      <div
        className={`bg-[${bgColorValue}] mx-5 box-border`}
        style={{
          padding: paddingValue,
          backgroundColor: bgColorValue,
        }}
      >
        {/* <img src={img} alt="" className=" w-[200px] h-[200px]" /> */}
        <Image
          src={img}
          alt="this is pict"
          style={{
            width: "100%",
            height: "100%",
            filter: `blur(${blurValue}px)`,
          }}
        />
      </div>
    </section>
  );
};

export default ImagePage;
