"use client"
import Image from "next/image";
import styles from "./level.module.css";

import Navbar from "../../components/Navbar/page";
import Background from "../../components/backgorund/page"



export default function Home() {



  return (
    <main className={styles.main}>
      <Navbar />
      <section  id="section_1" className={styles.context} >
        <h1>Working On This Page</h1>
        <p>Coming Soon....!</p>
      </section>
      <Background />

    </main>
  );
}
