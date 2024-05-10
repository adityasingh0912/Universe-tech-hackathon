"use client"
import Image from "next/image";
import styles from "./cohub.module.css";
import Navbar from "../../components/Navbar/page";
import { useRouter } from "next/navigation";
import Background from "../../components/backgorund/page";

export default function profile() {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <Navbar/>
            <Background />
            <div className={styles.main_box}>
                <div className={styles.box} onClick={() => {
                    router.push("/projects")
                }}>
                    <Image src={"/project_list.png"} width={1000} height={1000} alt="#"/>
                    <h3>Projects List</h3>
                </div>
                <div className={styles.box} onClick={() => {
                    router.push("/create_team")
                }}>
                <Image src={"/team.png"} width={1000} height={1000} alt="#"/>

                    <h3>Create Team / Idea</h3>
                </div>
                <div className={styles.box} onClick={() => {
                    router.push("/level")
                }}>
                <Image src={"/level.png"} width={1000} height={1000} alt="#"/>

                    <h3>Level</h3>
                </div>
            </div>
        </main>
    );
}