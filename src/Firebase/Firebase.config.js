import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfeyXUw3YCkiCXfKMI0lyahnbZa3V0Vn4",
  authDomain: "h2tbazar-b03e3.firebaseapp.com",
  projectId: "h2tbazar-b03e3",
  storageBucket: "h2tbazar-b03e3.appspot.com",
  messagingSenderId: "775815521410",
  appId: "1:775815521410:web:23d27abfc45f1eaf8dc09b",
  measurementId: "G-KM3L6TDQXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app