// CSS
import "./App.css";

// Hooks
import { useState, useRef } from 'react';

// Images
import ProfileImg from './assets/professional-photo.jpg';
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";

// Components
import Carousel from "./components/Carousel/Carousel";

// Data
import { carouselData } from './components/Carousel/carouselData';
import SetLanguage from "./components/LanguageSelect/SetLanguage";

// Translate
import { i18n } from "./components/LanguageSelect/translate/i18n";

const App = () => {
  const [courses, setCourses] = useState(true);
  const [contact, setContact] = useState(false);
  const [experiences, setExperiences] = useState(false);

  const coursesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleContent = (content) => {
    if (content == 'courses') {
      setCourses(true);
      setExperiences(false);
      setContact(false);
      coursesRef.current.classList.add("active");
      experienceRef.current.classList.remove("active");
      contactRef.current.classList.remove("active");
    } else if (content == 'experiences') {
      setCourses(false)
      setExperiences(true)
      setContact(false)
      coursesRef.current.classList.remove("active");
      experienceRef.current.classList.add("active");
      contactRef.current.classList.remove("active");
    } else if (content == 'contact') {
      setCourses(false)
      setExperiences(false)
      setContact(true)
      coursesRef.current.classList.remove("active");
      experienceRef.current.classList.remove("active");
      contactRef.current.classList.add("active");
    }
  }

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <div className="left">
          <div className="photo">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="bio">
            <div className="texts">
              <p>{i18n.t("bio.firstPart")}</p>

              <p>{i18n.t("bio.secondPart")}</p>
            </div>
          </div>
          <div className="languageContainer">
            <SetLanguage />
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <div className="right">
          <div className="top">
            <header>
              <nav>
                <button onClick={() => handleContent('courses')} ref={coursesRef} className="nav-item active">{i18n.t("navButtons.courses")}</button>
                <button onClick={() => handleContent('experiences')} ref={experienceRef} className="nav-item">{i18n.t("navButtons.experiences")}</button>
                <button onClick={() => handleContent('contact')} ref={contactRef} className="nav-item">{i18n.t("navButtons.contact")}</button>
              </nav>
            </header>

            <div className="content">
              {courses && <Courses />}
              {experiences && <Experiences />}
              {contact && <Contact />}
            </div>
          </div>

          <div className="bottom">
            <Carousel>
              {carouselData.map((item, index) => (
                <span key={index}>
                  <p style={{height: "5%", textAlign: "center", fontWeight: "bold"}}>{`${item.name} (${item.tag})`}</p>
                  <img src={item.image} alt={item.name} style={{width: "100%", height: "95%"}} />
                </span>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App