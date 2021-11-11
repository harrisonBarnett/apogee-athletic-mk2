import { initializeApp } from "firebase/app"
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAlEuXGfet8mO-wsG5IpIrtKEHLlErm44c",
    authDomain: "apogee-athletic-site.firebaseapp.com",
    projectId: "apogee-athletic-site",
    storageBucket: "apogee-athletic-site.appspot.com",
    messagingSenderId: "995056754006",
    appId: "1:995056754006:web:0178df921cb109f7cc8af7",
    measurementId: "G-KXHZEK5SJ0"
  }

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
