import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-check.js";

// const image = document.querySelector(".hamburger")

const container = document.querySelector(".container")
// const para = document.querySelector(".container2")
const main = document.querySelector(".contet")
const signup= document.querySelector(".signup")
const signup1 = document.querySelector(".signup1")
// image.addEventListener("click" , ()=>{
// // container.classList.toggle('container')
// container.classList.toggle("container2")
// container.classList.remove("container2")
// }
// )
// signup.addEventListener("click" , ()=>{
// signup1.classList.toggle("signup3")
// })
// signup.addEventListener("click" , ()=>{
// signup1.classList.toggle("signup3")})
// document.querySelector(".imaging").addEventListener("click" , ()=>{
// signup1.classList.toggle("signup3")
// })
// document.querySelector(".sig").addEventListener("click" , (e)=>{
//     e.preventDefault()
//     console.log("madhav")
// })

// const url = "https://static.openfoodfacts.org/data/openfoodfacts-products.jsonl.gz"

// async function getData(){
//  const data = await fetch(url)
//  const response = data.json()
//  console.log(response)
// }

// const input = document.querySelector(".text")
// // const value = input.value.trim()
// const search = document.querySelector(".images")
//    const content= document.querySelector(".middle")

// async function getData(name) {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//      const dat =await response.json()
//     //  console.log(dat)
//      dat.meals.forEach(element => {
//      content.innerHTML +=
//                       ` <section class="container3">
//                         <img class = "set" src= ${element.strMealThumb} alt="">
//                         </section>
//                        `
//               })
//          }
// search.addEventListener("click" , async ()=>{
//  const value = input.value.trim()
//  await getData(value)
// })
 

// 1. Apna Firebase Config yaha paste karo
const firebaseConfig = {
  apiKey: "AIzaSyC-YvuHU_0xSWt5NdLHxavOe6mQCnjuBpI",
  authDomain: "fruitsvegetable-website.firebaseapp.com",
  projectId: "fruitsvegetable-website",
  storageBucket: "fruitsvegetable-website.firebasestorage.app",
  messagingSenderId: "930353495099",
  appId: "1:930353495099:web:4b0beba40fea843426b01e"
};
// 
const app = initializeApp(firebaseConfig);
  // 3. App Check - Yaha SITE KEY paste karni hai
//   const appCheck = initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider('6LcVU18tAAAAAOAhGM1-oML_w-luo1DyzHhOBkjE'), // <-- Yaha
    // isTokenAutoRefreshEnabled: true
//   });
const auth = getAuth(app);
const db = getFirestore(app);

// 2. SIGNUP
document.querySelector(".sig").addEventListener("click" , async (e) => {
    e.preventDefault()
    console.log("madhav")
const name = document.getElementById("name").value;
  const email = document.getElementById("emailid").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Firestore me name save
    await setDoc(doc(db, "customers", user.uid), {
      name: name,
      emailid: email,
      createdAt: new Date()
    });

    alert("Signup success!");
    window.location.href = "../files/vegetables.html";
    name = '';
    email = '';
    password = '';
  } catch (error) {
    alert("Signup Error: " + error.message);
  }


 
});

// 3. LOGIN
// document.getElementByclassname("signup1").addEventListener("sig", async (e) => {
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     alert("Login success!");
//   } catch (error) {
//     alert("Login Error: " + error.message);
//   }
// });

// 4. Login hai ya nahi check karna
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     // Login hai
//     const userDoc = await getDoc(doc(db, "customers", user.uid));
//     document.getElementById("userInfo").innerHTML = 
//       Welcome ${userDoc.data().name} <button onclick="logout()">Logout</button>;
//   } else {
//     // Logout hai
//     document.getElementById("userInfo").innerHTML = "Not logged in";
//   }
// });

// 5. Logout function
// window.logout = async function() {
//   await signOut(auth);
//   alert("Logged out");
// }
// </script>
