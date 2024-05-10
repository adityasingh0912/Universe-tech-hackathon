"use client"
import Image from "next/image";
import styles from "./faqs.module.css";
import { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import Navbar from "../../components/Navbar/page";
import Background from "../../components/backgorund/page"
import ContactUs from "../../components/contactus/page"
import Footer from "../../components/Footer/page"
// import FAQItem from "../../components/FAQItem/page";

function FAQItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(prevState => !prevState);
  };

  return (
    <div className={styles.faq_box}>
      <button onClick={toggleAnswer}>
        {question} {showAnswer ? "▲" : "▼"}
      </button>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
}

export default function Home() {

  const faqs = [
    {
      question: "What is Universe Tech?",
      answer: "Universe Tech is an online platform designed to connect students, professionals, and enthusiasts in the technology industry."
    },
    {
      question: "How does Universe Tech work?",
      answer: "Universe Tech works by allowing users to create profiles, search for collaborators, join teams, and participate in projects and hackathons. Users can connect with like-minded individuals, share their skills, and work together to bring ideas to life."
    },
    {
      question: "Who can use Universe Tech?",
      answer: "Universe Tech is open to anyone with an interest in technology, regardless of their skill level or background. Whether you're a student, a professional, or simply passionate about technology, you're welcome to join our community and collaborate with others."
    },
    {
      question: "What kind of projects can I find on Universe Tech?",
      answer: "Universe Tech hosts a wide range of projects spanning various domains, including software development, web development, data science, artificial intelligence, and more. Users can explore and contribute to projects that align with their interests and expertise."
    },
    {
      question: "How do I join a project or team on Universe Tech?",
      answer: "To join a project or team on Universe Tech, simply browse through the available projects or search for specific keywords or categories. Once you find a project that interests you, you can reach out to the project owner or team members to express your interest in joining."
    },
    {
      question: "Is Universe Tech free to use?",
      answer: "Yes, Universe Tech is free to use for all users. There are no subscription fees or hidden charges associated with using the platform. However, certain premium features or services may be offered in the future as part of optional paid plans."
    },
    {
      question: "How can I report inappropriate behavior or content on Universe Tech?",
      answer: "Universe Tech has a strict code of conduct and community guidelines to ensure a safe and respectful environment for all users. If you encounter any inappropriate behavior or content on the platform, you can report it to our moderation team for review and action."
    },
    {
      question: "Can I showcase my projects or portfolio on Universe Tech?",
      answer: "Yes, Universe Tech provides features for users to showcase their projects, portfolios, and skills on their profiles. You can upload project descriptions, code repositories, and other relevant information to highlight your achievements and expertise."
    },
    {
      question: "How can I get help or support on Universe Tech?",
      answer: "If you need help or support while using Universe Tech, you can reach out to our customer support team through the contact form or support channels provided on the website. Our team is here to assist you with any questions or issues you may have."
    },
    {
      question: "How can I stay updated with the latest news and announcements from Universe Tech?",
      answer: "To stay updated with the latest news, announcements, and events from Universe Tech, you can subscribe to our newsletter, follow us on social media, or regularly check our blog and community forums for updates."
    }
  ];


  return (
    <main className={styles.main}>
      <Navbar />


      <section className={styles.details} id="section_2">
        <h2>FAQ's</h2>

        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}


      </section>


      <Background />

    </main>
  );
}
