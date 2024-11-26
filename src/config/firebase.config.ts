import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnjWVwN4k9HTBirLSEJHJmADIpGvmDS4E",
    authDomain: "notification-project-cloud.firebaseapp.com",
    projectId: "notification-project-cloud",
    storageBucket: "notification-project-cloud.firebasestorage.app",
    messagingSenderId: "561217479414",
    appId: "1:561217479414:web:dd325cc84ac881016682d7",
    measurementId: "G-B1DCFK356W"
};

// Initialiser Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialiser Firestore
export const firestore = getFirestore(firebaseApp);


