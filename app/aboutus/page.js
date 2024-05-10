"use client"
import Image from "next/image";
import styles from "./aboutus.module.css";
import { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import Navbar from "../../components/Navbar/page";
import Background from "../../components/backgorund/page"
import ContactUs from "../../components/contactus/page"
import Footer from "../../components/Footer/page"


export default function Home() {

 


  return (
    <main className={styles.main}>
      <Navbar />
   

      <section  className={styles.details} id="section_2">
        <h2>About Us</h2>

       <p>Welcome to Universe Tech, your premier platform for connecting students, professionals, and enthusiasts in the world of technology and innovation. At Universe Tech, we believe that collaboration is the key to unlocking creativity, driving innovation, and solving complex challenges.
<br></br><br></br><br></br>
<span>Our Mission</span>
<br></br><br></br>
Our mission is to provide a vibrant and inclusive community where individuals can come together to collaborate, learn, and grow. We strive to empower our users to connect with like-minded peers, share their knowledge and expertise, and embark on exciting projects that make a difference.
<br></br><br></br><br></br>
<span>What We Offer</span>
<br></br><br></br>
Connection: Universe Tech offers a unique opportunity to connect with a diverse community of individuals passionate about technology. Whether you're a student looking for project partners, a professional seeking collaborators for a startup idea, or an enthusiast eager to learn and contribute, you'll find your place here.
<br></br><br></br>
Collaboration: We provide a platform for teams to form, projects to flourish, and ideas to come to life. Through our collaborative features and tools, users can work together seamlessly, share their skills and experiences, and create innovative solutions to real-world problems.
<br></br><br></br>
Learning: Universe Tech is more than just a collaboration platform; it's also a hub for learning and skill development. Explore our resources, join discussions, and participate in events to expand your knowledge, sharpen your skills, and stay updated with the latest trends in the tech industry.
<br></br><br></br><br></br>
<span>Our Commitment to Excellence</span>
<br></br><br></br>
At Universe Tech, we are committed to excellence in everything we do. We strive to create a safe and welcoming environment where diversity is celebrated, ideas are valued, and everyone has the opportunity to thrive. Our dedicated team is passionate about supporting our community and ensuring that every user has a positive experience on our platform.
<br></br><br></br><br></br>
<span>Join Us</span>
<br></br><br></br>
Ready to embark on your next collaborative adventure? Join us at Universe Tech and become part of a dynamic community of innovators, creators, and changemakers. Together, we can build a brighter future through collaboration and innovation.</p>
      </section>
     
          
      <Background />

    </main>
  );
}
