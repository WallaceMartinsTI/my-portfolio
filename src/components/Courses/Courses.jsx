// CSS
import styles from "./Courses.module.css";

// Translate
import { i18n } from "../LanguageSelect/translate/i18n";

const Courses = () => {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.course}>
        <p>{i18n.t("courses.webFullDevelopment")}</p>
      </div>

      <div className={styles.course}>
        <p>{i18n.t("courses.reactCourse")}</p>
      </div>

      <div className={styles.course}>
        <p>{i18n.t("courses.webPythonDjango")}</p>
      </div>

      <div className={styles.course}>
        <p>{i18n.t("courses.python3")}</p>
      </div>

      <div className={styles.course}>
        <p>{i18n.t("courses.computerMaintenance")}</p>
      </div>
    </div>
  )
}

export default Courses