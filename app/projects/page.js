"use client"
import Image from "next/image";
import styles from "./projects.module.css";
import Navbar from "../../components/Navbar/page";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import Background from "../../components/backgorund/page";
import Project from "../../components/project_detail/page"

export default function profile() {

   
    const [popup, setPopup1] = useState(false);



    return (
        <main className={styles.main}>
            <Navbar/>
            <Background />
            <div className={styles.main_box}>
                <h3>Projects For You</h3>
                <div className={styles.filter}>
                    <input type="text" placeholder="Search Here"/>
                    <select>
                        <option selected disabled>Short By</option>
                        <option>Recommanded</option>
                        <option>Name</option>
                        <option>Date Add</option>
                    </select>
                </div>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <h4>Project Name</h4>
                        <p>Technology : Next.js, MongoDB, Node.js</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <button onClick={()=>{setPopup1(true)}}>View Details</button>
                    </div>
                    <div className={styles.project}>
                        <h4>Project Name</h4>
                        <p>Technology : Next.js, MongoDB, Node.js</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <button onClick={()=>{setPopup1(true)}}>View Details</button>
                    </div>
                    <div className={styles.project}>
                        <h4>Project Name</h4>
                        <p>Technology : Next.js, MongoDB, Node.js</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <button onClick={()=>{setPopup1(true)}}>View Details</button>
                    </div>
                    <div className={styles.project}>
                        <h4>Project Name</h4>
                        <p>Technology : Next.js, MongoDB, Node.js</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <button onClick={()=>{setPopup1(true)}}>View Details</button>
                    </div>
                </div>
            </div>
            {popup && (<Project/>)}
        </main>
    );
}