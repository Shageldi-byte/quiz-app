importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAvhiPOUUM6EF9siiDxbo0TZqAqorC8AVE",
    authDomain: "react-test-27dcd.firebaseapp.com",
    projectId: "react-test-27dcd",
    storageBucket: "react-test-27dcd.appspot.com",
    messagingSenderId: "359921261534",
    appId: "1:359921261534:web:18a403e0930dbfa2079b4f",
    measurementId: "G-JWWZEY7W5W"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});