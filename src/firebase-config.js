import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAH2rP7x0Q3Jsx6cTelwkK5yhaC1DbQ3Hk",
    authDomain: "ashleyveganblog.firebaseapp.com",
    projectId: "ashleyveganblog",
    storageBucket: "ashleyveganblog.appspot.com",
    messagingSenderId: "866433183009",
    appId: "1:866433183009:web:3faf8df3c3409ac3dfa260",
    measurementId: "G-1S1BC2S6XG"
  };

  const app = initializeApp(firebaseConfig);

  export const authentication = getAuth(app);