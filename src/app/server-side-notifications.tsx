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
        endpoint: "https://fcm.googleapis.com/fcm/send/eU57EuI9SaU:APA91bEpgpGvm2Qqp9fSQCeTTqouwiUq48E7Z2TH8Y44Yaz2d46N7YBBrZ2K3la7uT3PrvSMOW7uCIpTy0T1ccrpi4EGJHB3l_w_PyvH0YamurE_RYFxXmVQ8_aTe65rWSysjAPrYDZV",
        expirationTime: null,
        keys: {
            "p256dh": "BI7gPI-4jVeb5CVSOPyLQM3d5J1KftNYUSfOFsGjnPu5EYDlfdZcUaPk9OMDmG40a7DBhqKZxM534lhEZ66H4Og",
            "auth": "Yq-UDunIZuV0SzQbSxmnKg"
        }
    };

    webpush.sendNotification(
        pushSubscription,
        "just a TEST"
    );

    console.log("here to");



    /**
     * uploader pour voir si le pwa marche en ligne. validééé
     * Si oui, utiliser ce que je récupère en console pour le pushSubscription et c'est ça je passe 
     * en paramètre ici et j'appelle et je publie puis je vois ce que ça fait again
     */
}