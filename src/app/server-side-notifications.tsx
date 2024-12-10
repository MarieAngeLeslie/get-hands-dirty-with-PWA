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
        endpoint: 'https://fcm.googleapis.com/fcm/send/c2d9WASc_Uo:APA91bF5qONr-cyRpN6aVCasxLlk7yv-yhXJr6Z5gdAzPH0bIX6C1t85E6Z4aTIsxjCO31Hxot8q7MgoH_qobyJTZHmJx1G7Vr4tokOHTh-cJxbrGnxY2MuLeOdCeuNZCW7EF3L018Au',
        keys: {
            auth: 'F62CChVmyU4FVa39-TYJUA',
            p256dh: 'BB5E3VBQT0RfxBwQ-0sx4zabWlxhDwWlYiDD991BhOVHTL-K3aFr9fiHriytJVDuAfkAo5j3o2TnK_b8Wtm7fCU'
        }
    };

    webpush.sendNotification(
        pushSubscription,
        JSON.stringify({
            message: name,
            icon: 'nice notification🤩',
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