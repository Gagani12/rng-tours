"use client";

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const languages = {
  GB: "en",
  LK: "si",
  DE: "de",
  FR: "fr",
  IT: "it",
  ES: "es",
  RU: "ru",
  NL: "nl",
};

export default function LanguageSelector() {
  const [selected, setSelected] = useState("GB");

  const changeLanguage = (code) => {
    setSelected(code);

    const lang = languages[code];

    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="w-[170px]">
      <ReactFlagsSelect
        selected={selected}
        onSelect={changeLanguage}
        countries={["GB", "LK","DE", "FR", "IT", "ES", "RU", "NL", ]}
        customLabels={{
          GB: "English", 
          LK: "සිංහල",
          DE: "German",
          FR: "French",
          IT: "Italian",
          ES: "Spanish",
          RU: "Russian",
          NL: "Dutch",
         
        }}
      />
    </div>
  );
}