import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const containerinner = document.querySelector('.containerinner');
const details45 = document.querySelector(".itemsDetails45");

let orderItem;
  itemsorder():
    displayorderitems();
    itemsQuantityorder();

async function placeOrder() {
    if (!currentUser) return alert("Pehle login karo");

    if (userCart.length === 0) return alert("Cart khali hai");

    const orderData = {
        userId: currentUser.uid,        // kisne khareeda
        email: currentUser.email,       // email bhi save kar lo
        items: itemBag,                // pura cart yahi save ho jayega
        totalAmount: totalPriceRu,  // total kitna hua
        status: "Placed",               // Placed, Shipped, Delivered
        orderDate: serverTimestamp()    // time auto save
    };

    // "orders" collection me naya document ban jayega
    await addDoc(collection(db, "orders"), orderData);

    userCart = []; // cart khali
    saveCart(); // firebase cart bhi khali
    alert("Order placed successfully!");

  
    

function itemsorder() {
  orderItem = namit.map(item => {
    for (let i = 0; i < products.length; i++){
      if (item == products[i].id)
        return products[i]
    }
  })
console.log(orderItem);
}
function itemsQuantityOrder(){
//   let totalPriceRu = 0;
    details45.innerHTML = ' ';
orderItem.forEach((orderdetail)=>{
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
 }) }

function displayorderitems() {
   containerinner.innerHTML = '';
  orderItem.forEach(item => {
    containerinner.innerHTML +=    `    <div class="images38">
                    <img  class="manish89" src=../${item.images} alt="">
                </div>
                `
  });
}
