"use client";
import React, { useEffect, useRef, useState } from "react";

const Clock = () => {
  const [hours, setHours] = useState(90);
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  const secondsBar = useRef();
  const minutesBar = useRef();
  const hoursBar = useRef();
  useEffect(() => {
    let clockIntervalId = setInterval(() => {
      let secondsDeg = (new Date().getSeconds() / 60) * 360 + 90;
      let minutesDegrees = (new Date().getMinutes() / 60) * 360 + 90;
      let hoursDegrees = (new Date().getHours() / 12) * 360 + 90;
      setSeconds(secondsDeg);
      setMinutes(minutesDegrees);
      setHours(hoursDegrees);
      console.log(new Date().getHours(), seconds);
      secondsBar.current
        ? (secondsBar.current.style.transform = `rotate(${seconds}deg)`)
        : "";
      minutesBar.current
        ? (minutesBar.current.style.transform = `rotate(${minutes}deg)`)
        : "";
      hoursBar.current
        ? (hoursBar.current.style.transform = `rotate(${hours}deg)`)
        : "";
    }, 1000);

    return () => {
      return clearInterval(clockIntervalId);
    };
  }, [seconds]);

  return (
    <div>
      <h1 className=" text-center text-3xl font-bold my-5">Clock Page</h1>
      <div className="flex justify-center my-10">
        <div className="relative w-[300px] h-[300px] rounded-full border-[10px] border-indigo-700">
          <span
            ref={secondsBar}
            className={` absolute w-[130px] h-[6px] bg-black top-[50%] right-[50%] rotate-${seconds} origin-[100%]`}
          ></span>
          <span
            ref={minutesBar}
            className={` absolute w-[100px] h-[6px] bg-black top-[50%] right-[50%] rotate-${minutes} origin-[100%]`}
          ></span>
          <span
            ref={hoursBar}
            className={` absolute w-[90px] h-[6px] bg-black top-[50%] right-[50%] rotate-${hours} origin-[100%]`}
          ></span>
          <span className=" absolute w-[20px] h-[20px] rounded-full translate-x-[50%] translate-y-[-50%] bg-black top-[50%] right-[50%] origin-[100%]"></span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
