import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDEcEhyxXThRrzwo5vWe0HDlD4CDOC4TMM",
  authDomain: "tiktok---jornada-17f1f.firebaseapp.com",
  projectId: "tiktok---jornada-17f1f",
  storageBucket: "tiktok---jornada-17f1f.appspot.com",
  messagingSenderId: "303541862682",
  appId: "1:303541862682:web:b540e481a290a644952ca3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;