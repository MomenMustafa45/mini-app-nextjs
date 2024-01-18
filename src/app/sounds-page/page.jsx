"use client";

import { useRef } from "react";
import SoundButton from "@/UI/sound-button/SoundButton";
const btnKeys = [
  {
    name: "a",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    name: "s",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    name: "d",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    name: "f",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    name: "g",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    name: "h",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
];

const SoundsPage = () => {
  const soundsRef = useRef(new Array());

  const handlePress = (e) => {
    let audio = soundsRef.current.filter((s) => s?.id === e.key);

    if (audio[0]) {
      audio[0]?.play();
      audio[0].currentTime = 0;
    } else {
      return;
    }
  };

  return (
    <section className="container flex justify-center items-center h-screen">
      <div>
        {btnKeys.map((btn, indx) => {
          return (
            <div key={indx} className="inline-block">
              <SoundButton name={btn.name} handlePress={handlePress} />
              <audio
                src={btn.sound}
                ref={(audio) => {
                  if (soundsRef.current.length === 6) {
                    return;
                  }
                  soundsRef.current.push(audio);
                }}
                id={btn.name}
              ></audio>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SoundsPage;
