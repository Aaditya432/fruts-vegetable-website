// 1. Firebase import
import { auth, db } from './firebaseconfig.js';
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, orderBy, limit, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let orderItem = itemBag;
console.log(orderItem);
// 2. Apna config yaha paste kar

const containerInner = document.querySelector(".containerinner");
const details45 = document.querySelector(".itemsDetails45");

// 3. Login hai to latest order uthao
onAuthStateChanged(auth, async (user) => {
    const snap = await getDocs(collection(db, "itemBag"));
  await Promise.all(snap.docs.map(d => deleteDoc(doc(db, "itemBag", d.id))));
  if (user) {
    const q = query(
      collection(db, "itemBag"),
      where("userid", "==", user.uid),
 // sirf last wala order
    );
  
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      containerInner.innerHTML = "<p>Koi order nahi mila</p>";
    } else {
      querySnapshot.forEach((doc) => {
        const order = doc.data();
        orderItem.push({
        name : order.name,
        englishName : order.englishName,
        hindiName : order.hindiName,
        kg : order.kilogram,
        price :  order.price,
        })
     
      });
    }
  }
    console.log(orderItem);

orderDetails();
orderITem();
});
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
function orderDetails () {
orderItem.forEach((orderdetail)=>{
details45.innerHTML += `   <div class="details45">
                <div class="naming45">
                <span class="fruits45">Fruit name </span>
                 <span class="iname45">${orderdetail.englishName}</span>
                 </div>
                 <div class="kilo45">
                 <span class="kilogram45">kilogram</span>
                 <span class="kquantity45">${orderdetail.kg} kg</span>
                 </div>
                 <div class="priceitems45">
                <span class="pri45">price</span>
                <span class="pAout45">Rs ${orderdetail.price}</span>
                 </div>
                 </div>`
  })
}


  function orderITem (){
  orderItem.forEach(item => {
    containerInner.innerHTML +=    `    <div class="images38">
                    <img  class="manish89" src=../${item.name} alt="">
                </div>
                `
})
  }
