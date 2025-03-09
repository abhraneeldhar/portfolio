"use client"
import Image from "next/image"
import heroImage from "../public/heroImage.png"
import splashImage from "../public/splashlogo.jpg"

import styles from "./home.module.css"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { useEffect, useState } from "react"
export default function Home() {

  const words = ["Developer", "Coder", "Engineer", "Tech Freak", "Artist", "Architect"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (<>
    <div className={styles.main}>
      <div className={styles.splashLogoDiv}>
        <Image className={styles.splashLogo} src={splashImage} alt="" />
      </div>
      <div className={styles.tabDiv}>
        <div className={styles.tabMain}>
          <a className={styles.tabOption} href="">About</a>
          <a className={styles.tabOption} href="">Skillset</a>
          <a className={styles.tabOption} href="">Projects</a>
          <a className={styles.tabOption} href="">Experience</a>
        </div>
      </div>
      <div className={styles.heroDiv}>


        <div className={styles.gltichTextDiv}>
          <h1 className={styles.glitch}>{words[index]}</h1>
        </div>

        <div className={styles.heroTextDiv}>
          <div className={styles.nameNShi}>
            <h1>Abhraneel Dhar</h1>
            <h2>Computer Science undergrad by day <br /><span>Keyboard Wizard</span> by night</h2>
            <div className={styles.aboutTextDiv}>
              <p>All rounded developer with a broad skill set in IT and strong foundation in computer science, always aiming to create scalable and efficient solutions for real-world problems.</p>
            </div>
          </div>

          <div className={styles.downloadDiv}>
            <button>Get CV</button>
            <button>Get Resume</button>
          </div>



        </div>
        <Image className={styles.heroImage} src={heroImage} alt="" />

      </div>

      <div className={styles.socialsDiv}>
        <h2>Connect with the Tech Mafia</h2>
        <div className={styles.socialsOptionContainer}>
          <a href="https://github.com/abhraneeldhar" target="_blank">
            <div className={styles.socialOption}>
              <Github color="white" /><p>GitHub</p>
            </div>
          </a>
          <a href="https://linkedin.com/in/abhraneeldhar/" target="_blank">
            <div className={styles.socialOption}>
              <Linkedin color="white" /><p>LinkedIn</p>
            </div>
          </a>
          <a href="https://x.com/abhraneeldhar" target="_blank">
            <div className={styles.socialOption}>
              <Twitter color="white" /><p>Twitter</p>
            </div>
          </a>
          <a href="https://www.instagram.com/abhraneeldhar/" target="_blank">
            <div className={styles.socialOption}>
              <Instagram color="white" /><p>Instagram</p>
            </div>
          </a>
        </div>
      </div>


    </div>
  </>)
}