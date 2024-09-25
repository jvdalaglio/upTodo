import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyBcZnbLuowD44x5f96QBaukZeRNc5iLEj4",
 authDomain: "task-list-materialui.firebaseapp.com",
 projectId: "task-list-materialui",
 storageBucket: "task-list-materialui.appspot.com",
 messagingSenderId: "117197916773",
 appId: "1:117197916773:web:19ce117262edf6cf8d148c",
 measurementId: "G-NBB90CW11K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;