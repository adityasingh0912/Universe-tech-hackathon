"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import Navbar from "../components/Navbar/page";
import Background from "../components/backgorund/page"
import ContactUs from "../components/contactus/page"
import Footer from "../components/Footer/page"
import { useRouter } from "next/navigation";


export default function Home() {



  return (
    <main className={styles.main}>
      <Navbar />
      <section  id="section_1" className={styles.context} >
        <h1>Universe Tech </h1>

        <p>Conncet | Collab | Innovate</p>
      </section>

      <section  className={styles.details} id="section_2">
        <h2>Welcome to Our Platform</h2>

        <div className={styles.detail}>
          <Image src={"/img1.png"} width={1000} height={1000} alt="#" />
          <div>
            <p>

              <span>Discover</span><br></br>
              Explore a diverse range of content, from informative articles and engaging videos to captivating images and inspiring stories. Whether you're a seasoned developer or just starting out in web development, you'll find valuable resources to enhance your skills and knowledge.
              <br></br><br></br>
              <span>Connect</span>
              <br></br>
              Connect with fellow developers through our platform's social networking features and community forums. Share your ideas, experiences, and insights, and engage in meaningful discussions with peers from around the globe.</p>
          </div>
        </div>
      </section>
      <section  className={styles.details_2} id="section_3">
        <div className={styles.detail}>
          <div>
            <p>
            <span>Engage</span><br></br>
Dive into interactive features and activities designed to keep you engaged and informed. From coding challenges and hackathons to online workshops and tutorials, there's always something exciting happening on our platform.
<br></br><br></br>
              <span>Get Involved</span> <br></br>
              Get involved in our collaborative community by joining projects, sharing your expertise, or mentoring newer developers. Whether you're looking to expand your portfolio, learn new skills, or make meaningful contributions, there's a place for you here.
              </p>
          </div>
          <Image src={"/img2.png"} width={1000} height={1000} alt="#" />
        </div>
      </section>
      <section className={`${styles.contactus}`} id="section_4">
        <h3>Contact US</h3>
        <ContactUs />
        <Footer/>
      </section>
      <Background />

    </main>
  );
}
