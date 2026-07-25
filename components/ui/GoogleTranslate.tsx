"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Check if script is already added
    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            { 
              pageLanguage: "id",
              // Optionally you can restrict languages by uncommenting and modifying this:
              // includedLanguages: "en,id,ja,ko,zh-CN,ar,es,fr,de", 
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE 
            },
            "google_translate_element"
          );
        }
      };

      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      addScript.async = true;
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="scale-90 origin-right translate-y-[2px]"
      // scale and translate help it fit better in the navbar
    ></div>
  );
}
