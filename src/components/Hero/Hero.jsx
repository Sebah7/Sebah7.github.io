import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sebah!</h1>
        <p className={styles.description}>
          A full-stack opensource developer with experience using React, and
          NodeJS among other things. Reach out if you&apos;d like to learn more!
        </p>
        <a href="mailto:sebahismail21@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="src\assets\hero\heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};