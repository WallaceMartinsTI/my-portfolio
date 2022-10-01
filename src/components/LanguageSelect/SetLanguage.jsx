// CSS
import "./SetLanguage.css";

// Images
import BrazilFlag from "../../assets/brazil.png";
import UsaFlag from "../../assets/united-states.png";

// Hooks
import { useState, useEffect, useRef } from "react";

const I18N_STORAGE_KEY = "i18nextLng";

const SetLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem(I18N_STORAGE_KEY)
  );

  const ptButton = useRef(null);
  const enButton = useRef(null);

  const handleLanguage = (lang) => {
    if (lang === "pt-BR") {
      setSelectedLanguage("pt-BR");
    } else if (lang === "en-US") {
      setSelectedLanguage("en-US");
    }
  };

  useEffect(() => {
    if (selectedLanguage !== localStorage.getItem(I18N_STORAGE_KEY)) {
      localStorage.setItem(I18N_STORAGE_KEY, selectedLanguage);
      window.location.reload();
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (localStorage.getItem(I18N_STORAGE_KEY) === "pt-BR") {
      ptButton.current.classList.add("selected");
    } else if (localStorage.getItem(I18N_STORAGE_KEY) === "en-US") {
      enButton.current.classList.add("selected");
    }
  }, []);

  return (
    <>
      <div className="language">
        <div
          ref={ptButton}
          onClick={() => handleLanguage("pt-BR")}
          className="brazil"
        >
          <img src={BrazilFlag} alt="Brazil Flag" />
          <p>PT</p>
        </div>
        <div
          ref={enButton}
          onClick={() => handleLanguage("en-US")}
          className="usa"
        >
          <img src={UsaFlag} alt="Usa Flag" />
          <p>EN</p>
        </div>
      </div>
    </>
  );
};

export default SetLanguage;
