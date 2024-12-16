// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

window.addEventListener('message', function (event) {
    console.log("Event message reçu dans SW:", event);
    try {
        contacts = JSON.parse(event.data);
        console.log('Données parsées:', contacts);
    } catch (error) {
        console.error("Erreur parsing:", error);
    }
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



