"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { registerServiceWorker } from "../utils/utils";
import { useEffect, useState } from "react";
// import showNotifications from "./notifications";
//import { sendNotification, test_ } from "@/app/server-side-notifications";

interface NotificationData {
  id: string,
  name: string,
  promoNotif: string,
  sender: string
}

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [test, setTest] = useState('');
  const [test2, setTest2] = useState('');
  const [typeOfData, setTypeOfData] = useState('');

  const [notificationDatas, setNotificationDatas] = useState<NotificationData>();

  console.log("CONTACTS : ", contacts);


  useEffect(() => {
    registerServiceWorker();

    const handleMessage = (event: MessageEvent) => {
      const receivedDatas = JSON.parse(event.data)
      try {
        if (receivedDatas.promoNotif) {
          setTest('')
          console.log("Message venant de la push notificationavec App fermée");
          setNotificationDatas(receivedDatas)
          return;
        }
      } catch (error) {
        console.error('Erreur lors du parsing des notifs:', error);
      }

      try {
        const receivedDatas = JSON.parse(event.data);
        console.log('Contacts reçus:', receivedDatas);
        setContacts(receivedDatas);
      } catch (error) {
        console.error('Erreur lors du parsing des contacts:', error);
      }

    }

    window.addEventListener("message", handleMessage, true);

    return () => {
      window.removeEventListener("message", handleMessage, true);
    };
  }, [])



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

        <div className={styles.ctas} key={1}>
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

        <div key={"2-"}>
          <h1>Mes Contacts</h1>
          <h2>Showing a little part of my tests</h2>
          {contacts?.map((contact: { name: string, phoneNumber: string }, index) => {
            return (<div key={index}>
              Nom : {contact.name}
              <br />
              Numéro de téléphone : {contact.phoneNumber}
            </div>)
          })}
        </div>

        <div key={3}>
          {/* {"promoNotif":"true", "id":"593", "name":"Marie-Ange", "sender":"Paydunya Testing App"} */}

          <h1>Notifications Datas</h1>
          Name: {notificationDatas?.name}
          <br />
          Sender:{notificationDatas?.sender}
          <br />
          {test}
          <br />
          {/* {typeOfData} */}
        </div>
      </main>

    </div>
  );
}



