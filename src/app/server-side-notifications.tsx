"use server";

import webpush from 'web-push';

export const sendNotification = async (message: string, name: string) => {

    const vapidKeys = {
        publicKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_VAPID_KEY!,
        privateKey: process.env.WEB_PUSH_PRIVATE_VAPID_KEY!
    };

    webpush.setVapidDetails(
        'mailto:ange-example@paydunya.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey
    );

    // webpush.sendNotification(
    //     pushSubscription,
    //     JSON.stringify({
    //         message: name,
    //         icon: '🤩',
    //         body: message
    //     })
    // );


    /**
     * uploader pour voir si le pwa marche en ligne. validééé
     * Si oui, utiliser ce que je récupère en console pour le pushSubscription et c'est ça je passe 
     * en paramètre ici et j'appelle et je publie puis je vois ce que ça fait again
     */
}