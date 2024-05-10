"use client"
import Image from "next/image"
import styles from './footer.module.css'
import Link from "next/link"
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Login from "../login/page";


export default function Navbar() {

  return (<>
    
     
    <footer className={styles.footer}>
      <div>
        <Image src={"/instagram.png"} width={100} height={100} alt="Instagram" />
        <Image src={"/facebook.png"} width={100} height={100} alt="Facebook"/>
        <Image src={"/linkdin.png"} width={100} height={100} alt="Linkdin"/>
      </div>
      <div>
        <p>Privacy Policies</p>
        <p>-</p>
        <p>Terms And Conditions</p>
      </div>
    </footer>
    </>
    )
}
