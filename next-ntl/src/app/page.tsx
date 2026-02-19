"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Cookies from "js-cookie";

const Home = () => {
  const currentLang = Cookies.get("NEXT_LOCALE");
  const t = useTranslations();
  console.log(t("title"));
  const handleLanguageChange = () => {
    Cookies.set("NEXT_LOCALE", currentLang === "en" ? "ar" : "en", {
      expires: 365,
    });
    window.location.reload();
  };
  return (
    <div>
      {t("title")}
      <button onClick={handleLanguageChange} className="border cursor-pointer">
        Change Language
      </button>
    </div>
  );
};

export default Home;
