import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCge3dT2uVjxtKGlFzu5fjsI8MSW1l_Eq4",
  authDomain: "react-firebase-auth-d3b43.firebaseapp.com",
  projectId: "react-firebase-auth-d3b43",
  storageBucket: "react-firebase-auth-d3b43.appspot.com",
  messagingSenderId: "563565937044",
  appId: "1:563565937044:web:469cd8fe26961620164f81",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
