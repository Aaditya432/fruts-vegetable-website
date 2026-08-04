// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { auth, db } from './firebaseconfig.js';
import { collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-check.js";

// const image = document.querySelector(".hamburger")
const loginBtn = document.querySelector(".sig");
const container = document.querySelector(".container")
// const para = document.querySelector(".container2")
const main = document.querySelector(".contet")
const signup= document.querySelector(".signup")
const signup1 = document.querySelector(".signup1")
const userExist = document.querySelector(".userexist")
const login2 = document.querySelector(".login2")
// 2. SIGNUP
document.querySelector(".sig").addEventListener("click" , async (e) => {
    e.preventDefault()
    console.log("madhav")
let name = document.getElementById("name").value;
  let email = document.getElementById("emailid").value;
  let password = document.getElementById("password").value;

  try {
      // const userCredential1 = await signInWithEmailAndPassword(auth, email, password);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Firestore me name save
    await setDoc(doc(db, "customers", user.uid), {
      name: name,
      emailid: email,
      createdAt: new Date()
    });
    
    alert("Signup success!");
    window.location.href = "/fruts-vegetable-website/files/vegetables.html";
    name = '';
    email = '';
    password = '';
  } catch (error) {
    alert("Signup Error: " + error.message);
  }
});
// 3. LOGIN
document.querySelector(".login").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login success!");
   
    window.location.href = "/fruts-vegetable-website/files/vegetables.html";
  } catch (error) {
    alert("Login Error: " + error.message);
  }
});

userExist.addEventListener("click" , ()=>{
    login2.classList.toggle("login3");
    document.getElementById("signup2").style.display = "none";
    document.getElementById("login").style.display = "block";
})
