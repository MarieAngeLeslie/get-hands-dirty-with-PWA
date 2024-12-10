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
        endpoint: 'https://fcm.googleapis.com/fcm/send/d7LDE49wEb8:APA91bGncmG22S5zIigiGXIUnRD7ezDvKytDs1ForDTFnRXXYQbdT_W7m911vTcO0OjPqIIlxqsXYypxgXCyThQx-6b-SqoaYLHPViaHJglE0CtZuGKDlHpE03FjGjW9KzlhjCqk9fs2',
        keys: {
            auth: 'nJfK1FNiUsPJi_euA-PROA',
            p256dh: 'BMkIclFW0vg4DdOgEusujI5jtPAsFr458z7hqyaxHIGNCQnoljRUfmjI02GPqPwszKAChKwuP_5buH1xJD6xCvc'
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