// 1. Firebase import
import { auth, db } from './firebaseconfig.js';
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, orderBy, limit, setDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let realItem = [];
let orderItem;
let items;

let rendered = false;
items = localStorage.getItem("orderitems")
if(items != undefined){
    orderItem = JSON.parse(items);
}
console.log(orderItem);

const containerInner = document.querySelector(".containerinner");
const details45 = document.querySelector(".itemsDetails45");

onAuthStateChanged(auth, async (user) => {
  if (user && !rendered) {
      rendered = true;
      for(let item of orderItem){
     let id = item.id ? item.id : item; 
      
    const q = query(
      collection(db, "customers" , user.uid, "itemBag"),
    );
  
    const querySnapshot = await getDocs(q);
          

    if (querySnapshot.empty) {
      containerInner.innerHTML = "<p>Koi order nahi mila</p>";
    } else {
      querySnapshot.forEach((doc) => {
        const order = doc.data();
        realItem.push({
        name : order.name,
        englishName : order.englishName,
        hindiName : order.hindiName,
        kg : order.kilogram,
        price :  order.price,
        })
     
      });
    }
  }
  
    console.log(realItem);

orderDetails();
orderITem();
  }
});

function orderDetails () {
    details45.innerHTML = " ";
realItem.forEach((orderdetail)=>{
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
      containerInner.innerHTML = " ";
  realItem.forEach(item => {
    containerInner.innerHTML +=    `    <div class="images38">
                    <img  class="manish89" src=../${item.name} alt="">
                </div>
                `
})
  }
