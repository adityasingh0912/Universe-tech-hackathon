import Image from "next/image";
import styles from "./contactus.module.css";
import { useState } from "react";
import Cookies from 'js-cookie';
import { signIn } from "next-auth/react";

export default function Login() {

  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conform_passwoerd, setConform_Password] = useState("");



  return (
    <main className={styles.main}>
      <h3>Contact Us</h3>
      <div className={styles.container}>
        <div><label>Name :</label><input type="text" placeholder="Full Name" /></div>
        <div><label>Email :</label><input type="text" placeholder="Email"/></div>
        <div><label>Details :</label><textarea type="text" placeholder="Enter Your Details..." /></div>
        <button>Submit</button>
      </div>

    </main>
  );
}
