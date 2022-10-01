// CSS
import "./Contact.css";

// Icons
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { useRef } from "react";

const Contact = () => {
  
  const inputRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("wallace159santos@hotmail.com")
    inputRef.current.classList.remove("hide")
    console.log(inputRef.current.classList)

    setTimeout(() => {
      inputRef.current.classList.add("hide")
    }, 2000);
  }


  return (
    <div className="contactContainer">
      <a 
        className="contactItem"
        href="https://www.linkedin.com/in/wallace-martins-ti/"
        target="_blank"
      >
        <AiFillLinkedin />
        <p>wallace-martins-ti</p>
      </a>

      <a 
        className="contactItem"
        href="https://github.com/WallaceMartinsTI"
        target="_blank"
      >
        <AiFillGithub />
        <p>WallaceMartinsTI</p>
      </a>
      <div
        className="contactItem"
        onClick={copyEmail}
      >
        <AiFillMail />
        <p>wallace159santos@hotmail.com</p> <input type="text" ref={inputRef} value="Copiado!" className="copy hide" disabled/>
      </div>
    </div>
  )
}

export default Contact