const showNotifications = () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            subscribeUser();
        } else {
            console.log("Nous vous prions de bien vouloir accepter les notifications");
        }
    })
}

const subscribeUser = async () => {
    //make sure that my service worker is register before 

    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.getRegistration()
            if (registration) {
                generateSubscriberEndPoint(registration);
            } else {
                const newRegistration = await navigator.serviceWorker.register("./service-worker.js")
                generateSubscriberEndPoint(newRegistration);
            }
        } catch (error) {
            console.log("something went wrong in subscribe user fonction")
        }
    } else {
        console.log("service worker isn't in navigator");

    }
}


function urlB64toUint8Array(base64String: any) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    // Décode en chaîne binaire
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

const generateSubscriberEndPoint = async (newRegistration: ServiceWorkerRegistration) => {
    console.log("env variable : ", process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_VAPID_KEY);

    const applicationServerKey = urlB64toUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_VAPID_KEY);

    const options = {
        userVisibleOnly: true,
        applicationServerKey
    }


    const subscription = await newRegistration.pushManager.subscribe(options);
    console.log("subscription datas : ", subscription);

}


export default showNotifications;