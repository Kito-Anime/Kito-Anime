import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBP9ZnwzQrrRY5JNy1DANm3boaWgvhoS_w",
  authDomain: "kito-anime-vn.firebaseapp.com",
  projectId: "kito-anime-vn",
  storageBucket: "kito-anime-vn.firebasestorage.app",
  messagingSenderId: "287480619398",
  appId: "1:287480619398:web:f40d137345407f27874c07",
  measurementId: "G-N29YRE1NQS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
