// 1. Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 2. Apna config yaha paste karo
  const firebaseConfig = {
    apiKey: "AIzaSyC-YvuHU_0xSWt5NdLHxavQe6mQCnjuBpl",
    authDomain: "fruitsvegetable-website.firebaseapp.com",
    projectId: "fruitsvegetable-website",
    storageBucket: "fruitsvegetable-website.firebasestorage.app",
    messagingSenderId: "930353495099",
    appId: "1:930353495099:web:4b0beba40fea843426b01e",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const containerInner = document.querySelector(".containerinner");

// 3. Login hai to latest order uthao
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const q = query(
      collection(db, "itemBag"),
      where("userId", "==", user.uid),
      orderBy("orderDate", "desc"),
      limit(1) // sirf last wala order
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      containerInner.innerHTML = "<p>Koi order nahi mila</p>";
    } else {
      querySnapshot.forEach((doc) => {
        const order = doc.data();
     
      });
    }

  } else {
    orderContainer.innerHTML = "<p>Pehle login karo</p>";
  }
});
let orderItem;


const details45 = document.querySelector(".itemsDetails45");


// async function placeOrder() {
//     if (!currentUser) return alert("Pehle login karo");

//     if (userCart.length === 0) return alert("Cart khali hai");

    // const orderData = {
    //     userId: currentUser.uid,        // kisne khareeda
    //     email: currentUser.email,       // email bhi save kar lo
    //     items: itemBag,                // pura cart yahi save ho jayega
    //     totalAmount: totalPriceRu,  // total kitna hua
    //     status: "Placed",               // Placed, Shipped, Delivered
    //     orderDate: serverTimestamp()    // time auto save
    // };

    // "orders" collection me naya document ban jayega
    // await addDoc(collection(db, "orders"), orderData);

    // userCart = []; // cart khali
    // saveCart(); // firebase cart bhi khali
    // alert("Order placed successfully!");

//   let totalPriceRu = 0;
console.log(itemBag);
console.log(namit);
itemBag.forEach((orderdetail)=>{
details45.innerHTML+= `
                  <div class="details45">
                <div class="naming45">
                <span class="fruits45">Fruit name </span>
                 <span class="iname45">${orderdetail.englishName}</span>
                 </div>
                 <div class="kilo45">
                 <span class="kilogram45">kilogram</span>
                 <span class="kquantity45">${orderdetail.kilogram} kg</span>
                 </div>
                 <div class="priceitems45">
                <span class="pri45">price</span>
                <span class="pAout45">Rs ${orderdetail.price}</span>
                 </div>
                 </div>`
  })



  itemBag.forEach(item => {
    containerInner.innerHTML +=    `    <div class="images38">
                    <img  class="manish89" src=../${item.images} alt="">
                </div>
                `
})
