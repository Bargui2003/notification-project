import * as firebase from 'firebase/app';
import 'firebase/firestore'; // Si vous utilisez Firestore
import 'firebase/auth'; // Si vous utilisez Auth
import 'firebase/messaging'; // Pour les notifications

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore(); // Exemple pour Firestore
