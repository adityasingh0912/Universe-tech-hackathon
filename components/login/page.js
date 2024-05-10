import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
import Cookies from 'js-cookie';
import { signIn } from "next-auth/react";

export default function Login() {

  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conform_passwoerd, setConform_Password] = useState("");
  const currentDate = new Date();
  const expiryTime = currentDate.getTime() + (3 * 60 * 60 * 1000);

  const expiryDate = new Date(expiryTime);



  const handleRegister = async () => {

    const user = { email, name, password };
    try {
      const response = await fetch('../api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.status === 201) {
        const res = await response.json();
        Cookies.set('token', res.token);
        alert("Welcome" + name);
      } else {
        const err = await response.json();
        alert("Error:" + err.error);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleLogin = async () => {

    const user = { email, password };
    try {
      const response = await fetch('../api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.status === 200) {
        const res = await response.json();
        Cookies.set('token', res.token);
        alert("Welcome Back");
      } else {
        const err = await response.json();
        alert("Error:" + err.error);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <button className={styles.close} onClick={() => {
          Cookies.set('token', 'undefined', { expires: expiryDate });
          window.location.reload();
        }}>close</button>

        <div className={styles.heading}>{login ? "Sign In" : "Sign Up"}</div>
        <form method="POST" className={styles.form} onSubmit={() => {
          login ? handleLogin() : handleRegister()
        }}>

          <input required={login ? false : true} className={styles.input} type="text" name="name" id="name" placeholder="Full Name" style={login ? { width: 0, height: 0, opacity: 0, margin: 0, padding: 0 } : {}} value={name} onChange={(e) => { setName(e.target.value) }} />
          <input required className={styles.input} type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <input required className={styles.input} type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <input required={login ? false : true} className={styles.input} type="password" name="password" id="conform_password" placeholder="Conform Password" style={login ? { width: 0, height: 0, opacity: 0 } : {}} value={conform_passwoerd} onChange={(e) => { setConform_Password(e.target.value) }} />


          <span className={styles.forgot_password} style={login ? {} : { width: 0, height: 0, opacity: 0, margin: 0 }}>Forgot Password ?</span>
          <button className={styles.login_button} type="submit" >{login ? "Sign In" : "Sign Up"}</button>

        </form>
        <div className={styles.social_account_container}>
          <span className={styles.title}>{login ? "Or Sign in with " : "Or Sign Up with"}</span>
          <div className={styles.social_accounts}>
            <button className={styles.social_button} onClick={() => {
              signIn()
            }}>
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg></button>
            <button className={styles.social_button}>
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </button>
            <button className={styles.social_button}>
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.new_register}><span onClick={() => { setLogin(!login) }}>New User? Register</span></div>

      </div>

    </main>
  );
}
