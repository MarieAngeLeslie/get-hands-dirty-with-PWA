"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { registerServiceWorker } from "../utils/utils";
import { useEffect } from "react";
// import showNotifications from "./notifications";
import { sendNotification, test_ } from "@/app/server-side-notifications";

export default function Home() {

  useEffect(() => {
    registerServiceWorker()
  }, [])

  // const handleNotifications = async (message: string, name: string) => {
  //   try {
  //     console.log("we're there");
  //     await test_();
  //   } catch (error) {
  //     console.log("error :", error);
  //   }

  //   await sendNotification(message, name);


  // }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>MyDunya Testing APP</h1>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
