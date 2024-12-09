// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

self.addEventListener("push", async (event) => {
    console.log("i'm pushed ");
    console.log("event", event);

    const { message, body, icon } = JSON.parse(event.data.text())
    console.log("je suis déclenché");

    event.waitUntil(
        self.registration.showNotification(message, { body, icon })
    );
})