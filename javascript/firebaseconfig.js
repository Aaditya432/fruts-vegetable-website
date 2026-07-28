// firebase.js
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
mport { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

 
const firebaseConfig = {
  apiKey: "AIzaSyC-YvuHU_0xSWt5NdLHxavOe6mQCnjuBpI",
  authDomain: "fruitsvegetable-website.firebaseapp.com",
  projectId: "fruitsvegetable-website",
  storageBucket: "fruitsvegetable-website.firebasestorage.app",
  messagingSenderId: "930353495099",
  appId: "1:930353495099:web:4b0beba40fea843426b01e"
};

const app = getApps().length === 0? initializeApp(firebaseConfig) : getApps()[0];
// 4. Turant baad App Check init - YAHI IMPORTANT HAI
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('TUMHARI_SITE_KEY_YAHA'), // 6Lc... wali key
  isTokenAutoRefreshEnabled: true 
});

export const auth = getAuth(app);
export const db = getFirestore(app);
