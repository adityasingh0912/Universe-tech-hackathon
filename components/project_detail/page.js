import Image from "next/image";
import styles from "./projects.module.css";
import { useState } from "react";
import Cookies from 'js-cookie';
import { signIn } from "next-auth/react";

export default function Login() {


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <button className={styles.close} onClick={() => {
          window.location.reload()
        }}>close</button>

        <div className={styles.heading}>{"Project Name"}</div>
        <p><span>Technology : </span> Next.js,  MongoDB, Node.js</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        <p><span>Team Leader : </span>Leader Name</p>
        <p><span>Team Members : </span>First Person Name, Second Person Name</p>

        <div className={styles.new_register}><span>Apply</span></div>

      </div>

    </main>
  );
}
