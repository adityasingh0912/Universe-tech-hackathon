"use client"
import Image from "next/image"
import styles from './nav.module.css'
import Link from "next/link"
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Login from "../login/page";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [login_popup, setPopUp] = useState(false);
  const [profile, setProfile] = useState(false);
  const router =useRouter()
  const session = useSession();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setPopUp(false)
      if (token === "undefined") {
        setProfile(false)
      }
      else {
        setProfile(true)
      }
    }
    else if ((session.status === 'authenticated')) {

      const fetchData = async () => {
        const email = session.data.user.email;
        console.log(email)
        try {
          const response = await fetch('../api/encrypt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(email),
          });
          if (response.status === 200) {
            const res = await response.json();
            console.log(res.token)
            Cookies.set('token', res.token);
            window.location.reload();
          } else {
            const err = await response.json();
            alert("Error:" + err.error);
          }
        } catch (error) {
          alert(error);
        }
      }
      fetchData()

      Cookies.set('token',)
    }
    else {
      setPopUp(true)
    }
  }, [session]);

  return (<>
    {login_popup && (<Login />)}


    <nav className={styles.nav}>

      <Image className={styles.logo} width={1000} height={1000} alt={"hhdh"} src={"/logo.png"}
        onClick={() => {
          router.push("/")
        }}
      ></Image>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/cohub">Cohub</Link>
        {/* <Link href="/">Features</Link> */}
        <Link href="/aboutus">About Us</Link>
        <Link href="/faqs">FAQ's</Link>

      </div>
      {!profile && <button className={styles.signin} onClick={() => {
        Cookies.remove('token');
        window.location.reload();
      }}>Sign In / Up</button>}
      {profile && (<Image className={styles.profile} src={"/p2.jpg"} width={100} height={100} alt="#" onClick={() => { router.push("profile") }} />)}
    </nav>
  </>
  )
}
