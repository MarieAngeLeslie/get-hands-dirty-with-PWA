// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

// self.addEventListener("push", async (event) => {
//     console.log("event-----");
//     console.log("event-----+", event);
//     //console.log("event-----+", event);


//     const { message, body, icon } = JSON.parse(event.data.text())
//     console.log("je suis déclenché");

//     event.waitUntil(
//         self.registration.showNotification(message, { body, icon })
//     );
// })
export const contacts = [];
window.addEventListener('message', function (event) {
    // Recevoir les messages de React Native
    contacts = JSON.parse(event.data);
    console.log('Données reçues dans la PWA:', JSON.parse(data));

    // Envoyer une réponse à React Native
    // window.ReactNativeWebView.postMessage(JSON.stringify({
    //     response: "Message reçu!",
    //     someData: "quelque chose"
    // }));
});



