"use client"
import Image from "next/image";
import styles from "./profile.module.css";
import Navbar from "../../components/Navbar/page";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import Background from "../../components/backgorund/page";
import { signOut } from "next-auth/react";


export default function profile() {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [number, setNumber] = useState("");
    const [institute, setInstitute] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [edit, setEdit] = useState(false);
    const [personal, setPersonal] = useState(true);
    const [customize_hours_popup, setPopup1] = useState(false);
    const [special_hours_popup, setPopup2] = useState(false);
    const [Add_Additional_Availability_popup, setPopup3] = useState(false);
    const [value1, setVal1] = useState("Disabled");
    const [radio_value, setVal2] = useState(true);
    const router = useRouter()
    // useEffect(
    //     () => {
    //         const tokens = Cookies.get('token');
    //         setToken(tokens)
    //         const fetchData = async () => {
    //             if (tokens != null) {
    //                 const user = { tokens };
    //                 try {
    //                     const response = await fetch('../api/profile', {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                         body: JSON.stringify(user),
    //                     });

    //                     if (response.status != 200) {
    //                         throw new Error(`HTTP error! Status: ${response.status}`);
    //                     }

    //                     // Parse the JSON response
    //                     const result = await response.json();

    //                     // Update the state with the fetched data
    //                     setName(result.post.name);
    //                     setNumber(result.post.number);
    //                     setEmail(result.post.email);
    //                     setRole(result.post.position);
    //                     setInstitute(result.post.institute);
    //                     setDepartment(result.post.department);



    //                 } catch (error) {
    //                     alert(error)
    //                 }
    //             }
    //         };
    //         // Call the fetch data function
    //         fetchData();
    //     }, [])

    const handleUpdate = async () => {

        const user = { token, name, number };
        try {
            const response = await fetch('../api/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.status === 200) {
                // Store the token and redirect to the protected page
                alert("Data is Updated");
                window.location.reload()



            } else {
                const err = await response.json();
                // Handle login error
                alert(err.error);
            }
        } catch (error) {
            // Handle fetch error
            alert(error);
        }
    };

    return (
        <main className={styles.main}>
            <Navbar/>
            <Background />
            <div className={styles.profile_box}>
                <div className={styles.basic_info}>
                    <button>Edit</button>
                    <div className={styles.info_img_username}>
                    <Image src={"/p2.jpg"} width={1000} height={1000} alt="#"></Image>
                        <input type="text" value={"@nikilnebhavani"} />
                    </div>
                    
                    <div className={styles.info}>
                        <input type="text" value={"Nikhil Nebhavani"} />
                        <input type="email" value={"nikhilnebhavani@gmail.com"}/>
                        <textarea type="text" value={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                        
                    </div>
                </div>
                <div className={styles.technical_info}>
                    <div className={styles.lang}>
                        <div><Image src={"/JS.svg"} width={100} height={100} alt="#" /> <label> JavaScript</label></div>
                        <div><Image src={"/java.svg"} width={100} height={100} alt="#"/> <label> Java</label></div>
                        <div><Image src={"/Kotlin.svg"} width={100} height={100} alt="#"/> <label> Kotlin</label></div>
                        <div><Image src={"/Dart.svg"} width={100} height={100} alt="#"/> <label> Dart</label></div>
                        <div><Image src={"/CSharp.svg"} width={100} height={100} alt="#"/> <label> CSharp</label></div>
                        <div><Image src={"/Python.svg"} width={100} height={100} alt="#"/> <label> Python</label></div>
                        <div><Image src={"/TypeScript.svg"} width={100} height={100} alt="#"/> <label> TypeScprit</label></div>
                    </div>
                    <div className={styles.level_info}>
                        <div><label>Level :</label><p><Image src={"/elite.png"} width={100} height={100} alt="#"/>Elite</p></div>
                        <div><label>Projects Created :</label><p>32</p></div>
                        <div><label>Collaborations :</label><p>157</p></div>
                        <div><label>Leader Role :</label><p>157</p></div>
                        <button onClick={async () => {
                            await signOut()
                            await Cookies.remove('token');
                            window.location.replace("/");
                        }}>Sign Out</button>
                    </div>
                    <div className={styles.projects}>
                        <div className={styles.project}>
                            <div><label>Name :</label><p>Project Name</p></div>
                            <div><label>Technology :</label><p>Next.js, Node.Js, MongoDB</p></div>

                            
                        </div>
                        <div className={styles.project}>
                            <div><label>Name :</label><p>Project Name</p></div>
                            <div><label>Technology :</label><p>Next.js, Node.Js, MongoDB</p></div>

                            
                        </div>
                        <div className={styles.project}>
                            <div><label>Name :</label><p>Project Name</p></div>
                            <div><label>Technology :</label><p>Next.js, Node.Js, MongoDB</p></div>

                            
                        </div>
                        <div className={styles.project}>
                            <div><label>Name :</label><p>Project Name</p></div>
                            <div><label>Technology :</label><p>Next.js, Node.Js, MongoDB</p></div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}