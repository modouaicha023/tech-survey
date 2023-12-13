import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain: "dev-survey-35035.firebaseapp.com",
  databaseURL: "https://dev-survey-35035-default-rtdb.firebaseio.com",
  projectId: "dev-survey-35035",
  storageBucket: "dev-survey-35035.appspot.com",
  messagingSenderId: "1026585456398",
  appId: "1:1026585456398:web:98b4d8feea922009acb15f",
  measurementId: "G-XFPQ9TCCLC"
};

export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };