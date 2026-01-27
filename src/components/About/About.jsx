import styles from "./About.module.css";
import { FaCode, FaServer, FaPalette } from "react-icons/fa";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* <img
          src="/images/about/aboutImage.jpg"
          alt="Sebah smiling with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FaCode size={32} />
            <div className={styles.aboutItemText}>
              <h3>Who I Am</h3>
              <p>
                I am a <span>Fullstack Web Developer!</span> I have an interest
                in making the world a better place, and I do that through
                fighting for a more welcoming society, healthy individuals, and
                a clean earth!
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <FaServer size={32} />
            <div className={styles.aboutItemText}>
              <h3>Areas of Interest</h3>
              <p>
                <strong>Volunteer:</strong> Nya Kompis Byrån, Framtidsprogrammet <br />
                <strong>Environment:</strong> Reduce, Reuse, Recycle, Planting Trees <br />
                <strong>Integration:</strong> Quadrilingual, Integration Events
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <FaPalette size={32} />
            <div className={styles.aboutItemText}>
              <h3>Education & Skills</h3>
              <p>
                <strong>Current:</strong> Chas Academy - Fullstack Web Developer (Sep 2023 - Jun 2025) <br />
                <strong>Previous:</strong> Astar - Programming 1 C# (Jan 2023 - Mar 2023) <br />
                <strong>Skills:</strong> HTML5, CSS3, JavaScript, React, Angular, Node.js, PHP, MySQL, MongoDB, Git/GitHub, Docker, Figma <br />
                <strong>Languages:</strong> Swedish, English, Arabic, Tigrinya
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
