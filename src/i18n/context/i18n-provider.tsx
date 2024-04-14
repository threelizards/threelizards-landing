"use client";

import { useEffect, useState } from "react";
import { I18NContext } from "./i18n-context";
import { updateCookieLanguage } from "../actions";
import { languages } from "../settings";

// ----------------------------------------------------------------------

type I18NProviderProps = {
  children: React.ReactNode;
  lng: string;
};

export function I18NProvider({ children, lng }: I18NProviderProps) {
  const [language, setLanguage] = useState(lng);

  const changeLanguage = (lng: string) => {
    if (languages.includes(lng)) setLanguage(lng);
  };

  useEffect(() => {
    updateCookieLanguage(language);
  }, [language]);

  return (
    <I18NContext.Provider value={{ language, changeLanguage }}>
      {children}
    </I18NContext.Provider>
  );
}
