import { initializeApp } from 'firebase/app';
import { getMessaging, getToken,onMessage} from 'firebase/messaging';
// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.

const firebaseConfig = {
    apiKey: "AIzaSyAvhiPOUUM6EF9siiDxbo0TZqAqorC8AVE",
    authDomain: "react-test-27dcd.firebaseapp.com",
    projectId: "react-test-27dcd",
    storageBucket: "react-test-27dcd.appspot.com",
    messagingSenderId: "359921261534",
    appId: "1:359921261534:web:18a403e0930dbfa2079b4f",
    measurementId: "G-JWWZEY7W5W"
};


// if(window.location.hostname=='localhost' || window.location.hostname=='127.0.0.1'){

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


// }

export const requestForToken = (setTokenFound) => {
    // if(window.location.hostname=='localhost' || window.location.hostname=='127.0.0.1'){
        return getToken(messaging, { vapidKey: "BL4mR2ua4Mh4Vn3puPXiXewboZpQsWiR8Z_JfmzkwJJR3SHwdp_pR33K0SJB98RIcqcQOsUaPAXFaz1-n2FSbYo" })
            .then((currentToken) => {
                if (currentToken) {
                    setTokenFound(true)
                    console.log('current token for client: ', currentToken);
                    localStorage.setItem('fcm_token',currentToken);
                    // Perform any other neccessary action with the token
                } else {
                    setTokenFound(false)
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                }
            })
            .catch((err) => {
                setTokenFound(false)
                console.log('An error occurred while retrieving token. ', err);
            });
    // } else {
    //     setTokenFound(false)
    //     console.log('Unsopperted browser')
    // }

};

export const onMessageListener = () =>{
    // if(window.location.hostname=='localhost' || window.location.hostname=='127.0.0.1'){
        return new Promise((resolve) => {
            onMessage(messaging, (payload) => {
                console.log("payload", payload)
                resolve(payload);
            });
        });
    // } else {
    //     new Promise((resolve) => {
    //         resolve('Unsopperted browser');
    //     });
    // }

}