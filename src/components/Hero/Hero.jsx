import styles from "./Hero.module.css";

export const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Sebah!</h1>
        <p className={styles.description}>
          A full-stack opensource developer with experience using React, and
          NodeJS among other things. Reach out if you&apos;d like to learn more!
        </p>
        <button 
                  className={styles.contactBtn}
                  onClick={handleContactClick}
                >
                  Contact Me
                </button>
      </div>
      <img
        src="src\assets\hero\heroImage.png"
        alt="Hero image of Sebah"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};