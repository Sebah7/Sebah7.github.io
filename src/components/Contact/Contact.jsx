import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail size={24} />
          <a href="mailto:sebahismail21@gmail.com">sebahismail21@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin size={24} />
          <a href="https://www.linkedin.com/in/sebah-ismail-abubeker-361633bb/">linkedin.com/sebah-ismail-abubeker</a>
        </li>
        <li className={styles.link}>
          <FaGithub size={24} />
          <a href="https://www.github.com/Sebah7">github.com/Sebah7</a>
        </li>
      </ul>
    </footer>
  );
};