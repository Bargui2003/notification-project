import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnjWVwN4k9HTBirLSEJHJmADIpGvmDS4E",
    authDomain: "notification-project-cloud.firebaseapp.com",
    projectId: "notification-project-cloud",
    storageBucket: "notification-project-cloud.firebasestorage.app",
    messagingSenderId: "561217479414",
    appId: "1:561217479414:web:dd325cc84ac881016682d7",
    measurementId: "G-B1DCFK356W"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();

