"use server";

import webpush from 'web-push';

export async function test_() {
    try {
        console.log("mido fiiii");
    } catch (error) {
        console.error("Error in test function:", error);
        throw error;
    }
}

export const sendNotification = async (message: string, name: string) => {

    console.log("here too");

    const vapidKeys = {
        publicKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_VAPID_KEY!,
        privateKey: process.env.WEB_PUSH_PRIVATE_VAPID_KEY!
    };

    webpush.setVapidDetails(
        'mailto:ange-example@paydunya.com',
        vapidKeys.publicKey,
        vapidKeys.privateKey
    );

    const pushSubscription = {
        endpoint: "https://fcm.googleapis.com/fcm/send/cS3dzcjBYgg:APA91bFOThj2dePoUAxQQ9ClfVetM5HqhBxrdo8aeiR1prNN2ujUkG7o9pkowWQ4YMX_ZPbqLdDDVf7bRFeieNS-OlOdxjrAcYPk0ekES9j-F5L_HNz_7OpdH9fmkTWSy143qWfLZ6B1",
        expirationTime: null,
        keys: {
            p256dh: "BA0GPUZVfpeD0jjBBEXVj8fGjU7MMMQEOE0xVWaQgPk-uF_5vfq5UsccD42zKqbzznaDPPEDyp72FmWMLscmpdw",
            auth: "TLS6J-9Btzk6R6Ajbw9tZg"
        }
    };

    webpush.sendNotification(
        pushSubscription,
        JSON.stringify({
            message: name,
            icon: '🤩',
            body: message
        })
    );

    console.log("here to");



    /**
     * uploader pour voir si le pwa marche en ligne. validééé
     * Si oui, utiliser ce que je récupère en console pour le pushSubscription et c'est ça je passe 
     * en paramètre ici et j'appelle et je publie puis je vois ce que ça fait again
     */
}