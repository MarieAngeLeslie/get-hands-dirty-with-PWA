export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/service-worker.js")
        console.log("yes, i regitered service worker");

    }
}

