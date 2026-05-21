// firebase-config.js — Configuration partagée
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDn1A3ViE1YvBV7F8DzEJ8wSmElTBCEhb4",
  authDomain: "flatpay-tracker-50615.firebaseapp.com",
  projectId: "flatpay-tracker-50615",
  storageBucket: "flatpay-tracker-50615.firebasestorage.app",
  messagingSenderId: "1087038039294",
  appId: "1:1087038039294:web:db633182fa34d1ba7cf1af"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
