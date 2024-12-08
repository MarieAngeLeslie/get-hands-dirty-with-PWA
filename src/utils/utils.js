export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        console.log("yes, je suis bien là !");
        navigator.serviceWorker.register("/service-worker.js")
    }
}

