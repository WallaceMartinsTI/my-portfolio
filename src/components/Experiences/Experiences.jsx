// CSS
import "./Experiences.css";

// Translate
import {i18n} from '../LanguageSelect/translate/i18n'

const Experiences = () => {
  return (
    <div className="experiencesContainer">
      <div className="experience">
        <h4>Powercoat Tratamento de Superfícies LTDA</h4>
        <h5>{i18n.t("experiences.powercoatIntern.periodCity")}</h5>
        <h5>{i18n.t("experiences.powercoatIntern.office")}</h5>
        <p>{i18n.t("experiences.powercoatIntern.description")}</p>
      </div>

      <div className="experience">
        <h4>Powercoat Tratamento de Superfícies LTDA</h4>
        <h5>{i18n.t("experiences.powercoatTechnical.periodCity")}</h5>
        <h5>{i18n.t("experiences.powercoatTechnical.office")}</h5>
        <p>{i18n.t("experiences.powercoatTechnical.description")}</p>
      </div>

      <div className="experience">
        <h4>MaximoCon IT Services (Cohesive)</h4>
        <h5>{i18n.t("experiences.maximoconCohesive.periodCity")}</h5>
        <h5>{i18n.t("experiences.maximoconCohesive.office")}</h5>
        <p>{i18n.t("experiences.maximoconCohesive.description")}</p>
      </div>
    </div>
  )
}

export default Experiences