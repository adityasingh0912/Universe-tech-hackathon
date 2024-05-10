"use client"
import Image from "next/image";
import styles from "./create_team.module.css";
import { useState } from "react";
import Cookies from 'js-cookie';
import { signIn } from "next-auth/react";
import Navbar from "../../components/Navbar/page";
import { useRouter } from "next/navigation";
import Background from "../../components/backgorund/page";

export default function Login() {

  const [members, setCounts] = useState(0);
  const [Project_Name, setName] = useState("");
  const [Project_Datail, setDetail] = useState("");
  const [Technology, setTechnology] = useState([]);
  const [members_data, setData] = useState({});



  return (
    <main className={styles.main}>
      <Navbar />
      <Background/>

      <h3>Contact Us</h3>
      <div className={styles.container} >
        <div><label>Project Name :</label><input type="text" placeholder="Full Name" /></div>
        <div><label>Numbers Of Members Need :</label><input type="number" placeholder="Numbers" /></div>
        <div><label>Technologies :</label><textarea type="text" placeholder="Enter Your Technology..." /></div>
        <div><label>Description :</label><textarea type="text" placeholder="Enter Your Details..." /></div>
        <button>Continue</button>
      </div>
        <div className={styles.developers_box} style={{display:'none'}}>
          <div className={styles.developer}>
            <div><label>Name : </label><p>Nikhil Nebhavani</p></div>
            <div><label>Technologies : </label><p>Next.js, MongoDB, Node.js</p></div>
            <div><label>Detail : </label><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p></div>
            <div><label>Level :</label><p><Image src={"/elite.png"} width={100} height={100} alt="#"/>Elite</p></div>
            <div><label>Collaborations :</label><p>157</p></div>

          </div>
      </div>
    </main>
  );
}
