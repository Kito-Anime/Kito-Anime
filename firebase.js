import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
"apiKey": "API_KEY",
"authDomain": "AUTH_DOMAIN",
"projectId": "PROJECT_ID",
"storageBucket": "STORAGE_BUCKET",
"messagingSenderId": "MESSAGING_SENDER_ID",
"appId": "APP_ID"
"measurementId": "measurement_Id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
