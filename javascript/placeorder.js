// 1. Firebase import
import { auth, db } from './firebaseconfig.js';
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, orderBy, limit, setDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let realItem = [];
let orderItem;
let items;
let priceOfItems;

let rendered = false;
items = localStorage.getItem("orderitems")
if(items != undefined){
    orderItem = JSON.parse(items);
}
console.log(orderItem);

const containerInner = document.querySelector(".containerinner");
const details45 = document.querySelector(".itemsDetails45");
const priceAmount = document.querySelector(".prices");
const orderConfirm = document.querySelector(".orderconfirmationtext");

onAuthStateChanged(auth, async (user) => {
  if (user && !rendered) {
      rendered = true;
      
        const q = query(
      collection(db, "customers" , user.uid, "orders"),
            orderBy("orderDate", "desc" )
            limit(1)
    );
  
    const querySnapshot = await getDocs(q);
          

    if (querySnapshot.empty) {
      containerInner.innerHTML = "<p>Koi order nahi mila</p>";
    } else {
      querySnapshot.forEach((doc) => {
        const order = doc.data();
          if(order.items && order.items.length > 0 ){
              order.items.forEach((item)=>{  
        realItem.push({
        name : item.name,
        englishName : item.englishName,
        hindiName : item.hindiName,
        kg : item.kilogram,
        price :  item.price,
        })
                  })
          }
      });
    }
  }
  
    console.log(realItem);

orderDetails();
orderITem();
amount();
orderconfirm();
});

    // priceAmonunt.innerHTML =     `<div class="totalPrice">
    //             <span class="price1">totalprice</span>
    //             <span class="rupees1">Rs ${priceOfItems}</span>
    //         </div> `

function amount (){
    priceOfItems = 0;
    realItem.forEach((items) =>{
        priceOfItems += items.price
    })
    priceAmount.innerHTML =     `
                <span class="price1">totalprice</span>
                <span class="rupees1">Rs ${priceOfItems}</span>
                `
}

function orderconfirm (){
    orderConfirm.innerHTML = `
    <p> for order confirmation you have to call on this number 7222953707 after confirmation you will get your order soon </p>
    `
}

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
