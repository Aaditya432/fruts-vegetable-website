// import { getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { auth, db } from './firebaseconfig.js';
import { getAuth,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; // 1. Ye auth ke liye
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc, deleteDoc , setDoc, addDoc, query,where,serverTimestamp, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  // import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-check.js";'


  // const firebaseConfig = {
  //   apiKey: "AIzaSyC-YvuHU_0xSWt5NdLHxavQe6mQCnjuBpl",
  //   authDomain: "fruitsvegetable-website.firebaseapp.com",
  //   projectId: "fruitsvegetable-website",
  //   storageBucket: "fruitsvegetable-website.firebasestorage.app",
  //   messagingSenderId: "930353495099",
  //   appId: "1:930353495099:web:4b0beba40fea843426b01e",
  // };

 // naya mat banao
  // 3. App Check - Yaha SITE KEY paste karni hai
  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaV3Provider('6LcVU18tAAAAAOAhGM1-oML_w-luo1DyzHhOBkjE'), // <-- Yaha
  //   isTokenAutoRefreshEnabled: true
  // });


let products = fruits.concat(vegetables)
console.log(products)
 let totalPriceRu;
let itemBag;
let Bags;
 let itemOrder = []
 mango = [ ];
      let addressDocId;
      let savedAddressData;
let addressData;
console.log(namit);
syncCartToDatabase();
async function syncCartToDatabase(){
  // const snap = await getDocs(collection(db, "products"));
  // await Promise.all(snap.docs.map(d => deleteDoc(doc(db, "products", d.id))));
  for(let item of products){
    let id = item.id ? item.id : item; 
    let product = products.find(p => String(p.id) === String(id));
    
    if(product){
      await setDoc(doc(db, "products", String(id).padStart(3, '0')), {
        id: product.id,
        name: product.images,
        minusId: product.minusId,
        button4: product.button4,
        kilogram: product.kilogram,
        price : product.price ,
        button5: product.button5,
       englishName: product.englishName,
       hindiName: product.hindiName,
       cross : product.cross,
    
      });
    }
  }
  loadCart();
}

  // Page load hote hi Firebase se cart uthao
  async function loadCart(){
    // const cartContainer = document.querySelector('.itemscontainer234'); // tumhare cart wale div ki class
    // cartContainer.innerHTML = ""; // pehle khali karo
  const snapshot = await getDocs(collection(db, "products"));
      snapshot.forEach(docSnap => {
      const itemsimp = docSnap.data();
        console.log(itemsimp)
        products.push({
     id: docSnap.id,
    images: itemsimp.images,         
    minusId: itemsimp.minusId,
    button4: itemsimp.button4,
    kilogram: itemsimp.kilogram,
    price: itemsimp.price,
    button5: itemsimp.button5,
    englishName: itemsimp.englishName,
   hindiName: itemsimp.hindiName,
   cross : itemsimp.cross,
    })
     })
    onload();
      }

 // data = fruits.concat(vegetables)
const itemsContainer23 =  document.querySelector(".itemscontainer234");
const  details =  document.querySelector(".itemsDetails");
const quantity =document.querySelector(".Quantityitem");
const totalPrice = document.querySelector(".totalprice");
const addressOfCustomer = document.querySelector(".addressofcustomer");
const saveAddress = document.querySelector(".saveaddress");
const placeOrderI = document.querySelector(".butt");
const waitingItem = document.querySelector(".waitingitem");

// onload();
waitingItem.innerHTML = "<p>wait for a while</p>  ";

function onload(){
  itemsFruits();
  displayItems();
  quantityNumbers();
  itemsQuantity();
  displayTotalPrice();
  saveAddresss();
  placeOrder();
}
async function itemsFruits(){
itemBag = namit.map( item => {
  for(let i = 0; i < products.length; i++){
   if(item == products[i].id){
     
   return products[i];
    }
}
})
  console.log(itemBag)
  const userId = auth.currentUser.uid;
   // 1. Firebase se purana cart nikalo
  const snapshot = await getDocs(collection(db, "customers", userId, "itemBag"));
  const firebaseIds = snapshot.docs.map(d => d.id); 

  // 2. Local cart ke ids nikalo
  const localIds = itemBag.map(item => String(item.id).padStart(3, '0')); // ["001"]

  for(let id of firebaseIds){
    if(!localIds.includes(id)){
      await deleteDoc(doc(db, "customers", userId, "itemBag", id));
    }
  }
    
   for(let item of itemBag){
    let id = item.id ? item.id : item; 
    let products = itemBag.find(p => String(p.id) === String(id));
    
    if(products){
      await setDoc(doc(db, "customers" , userId ,"itemBag" ,String(id).padStart(3, '0')), {
        id: products.id,
        userid: userId,
        name: products.images,
        kilogram: products.kilogram,
        price : products.price ,
       englishName: products.englishName,
       hindiName: products.hindiName,
        },  {merge: true});
}
   }
   localStorage.setItem("orderitems", JSON.stringify(itemBag) )
   
}
 mangoItems = localStorage.getItem("mango")
 if (mangoItems != undefined){
  mango = JSON.parse(mangoItems)
 }
    itemsValue = localStorage.getItem("val")
if (itemsValue != undefined){
  namit = JSON.parse(itemsValue)
  console.log(namit)
} 
else{
  namit = [ ]
}

window.removeItem = function (itemid){
   mango =  namit.filter((Bagitem)=>{
      if( Bagitem != itemid ){
        return true;
      }
   })
  console.log(mango)
     Mango1 = new Set(mango)
     namit =Array.from(Mango1)
        localStorage.setItem("mango", JSON.stringify(mango) )
       localStorage.setItem('val' , JSON.stringify(namit))
          syncCartToDatabase();
              // loadCart();
              onload();
}

// function displayLength(){
//         if(namit.length > 0){
//               BagItems.style.visitbility = "visible"
//          BagItems.innerText = `bag items  ${namit.length}`
//              }
//              else{
//               BagItems.style.visitbility = " hidden"

//              }
// }
function quantityNumbers (){
    quantity.innerHTML = ' '
    quantity.innerHTML = `
              <div class="itemsqu">
                <h1 class="nitems">total number of items ${namit.length}</h1>
                </div>`
}
function displayTotalPrice (){
     totalPriceRu = 0;
    itemBag.forEach((itemsss)=>{
     totalPriceRu +=  itemsss.price ; 
    })
  totalPrice.innerHTML =    ` 
            <div class="tota">
                <span class="price">totalprice</span>
                <span class="rupees">Rs ${totalPriceRu}</span>
            </div> `

}
window.addressdetails = function (){
  savedAddressData= null;
  saveAddress.innerHTML = " "
  addressOfCustomer.innerHTML = `
  <h2>Delivery Address</h2>  
  <form id="addressForm">
    <input type="text" id="name" placeholder="Full Name" required><br>
    <input type="tel" id="phone" placeholder="Phone Number" required><br>
    <textarea id="address" placeholder="House No, Street, Area" rows="2" required></textarea><br>
      <button type="submit" id="submitBtn" >Save Address</button>
  </form>
 `

   const form = document.getElementById('addressForm');
   const name = document.getElementById('name');
   const phone = document.getElementById('phone');
   const address = document.getElementById('address');
    const btn = document.getElementById('submitBtn');
  form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btn.innerText = "Saving...";
      btn.disabled = true;
    onAuthStateChanged(auth, async (user) => {

    addressData = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        address: address.value.trim(),
        userId: auth.currentUser.uid,
        createdAt : serverTimestamp()
      }
    console.log(addressData.name)
       if (name != "" && phone != "" && address != "" ){
      try {
        await addDoc(collection(db, "addresses"), addressData);                                                                     
        saveAddresss();
  }
 
 catch (error) {
        alert("Error: " + error.message);
      }
         }             
       })
  })
}

function saveAddresss(){
    onAuthStateChanged(auth, async (user) => {
            try {
        // await addDoc(collection(db, "addresses"), addressData);
     if(user) {
        const q = query(collection(db, "addresses"), where("userId", "==", user.uid), orderBy("createdAt",  "desc"));
           
      const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0]; // pehla address le lo
        addressDocId = docSnap.id;
        savedAddressData = docSnap.data();
       console.log(savedAddressData);
        addressOfCustomer.innerHTML = ''
        saveAddress.innerHTML =   `  <div id="addressDisplay" class="address-box hidden">
      <h3>Saved Address</h3>
      <p id="displayName">  ${savedAddressData.name}</p>
      <p id="displayPhone"> ${savedAddressData.phone}</p>
      <p id="displayAddress"> ${savedAddressData.address}</p>
      <button id="changeAddressBtn" class="btn-secondary"  onclick = "addressdetails()" >Change Address</button>
    </div>`
      }
       else{
         savedAddressData = null;
       addressdetails()
       }
     }
            
    }
       catch (error) {
        alert("Error: " + error.message);
      }
     
    })
}
window.placeorderinvestigation = function(){
  if(savedAddressData  == null ){
    alert("⚠️ Please save your delivery address first!");
    document.getElementById('addressForm').scrollIntoView({behavior: "smooth"});
    return; // yahi ruk jao, aage mat jao
  }
 onAuthStateChanged(auth, async (user) => {
  if(!user){
    alert("Please login first");
    return;
  }
      else if(savedAddressData  != null && totalPriceRu <= 0 ){
    itemsContainer23.innerHTML = `<p> this field should not be empty  </p>`
  }
      else{
  
  // 1. itemBag ke saare items nikalo
  const bagSnap = await getDocs(collection(db, "customers", user.uid, "itemBag"));
  const orderItems = [];
  bagSnap.forEach(doc => orderItems.push( {id : doc.id, ...doc.data()}));
        console.log(orderItems);
        console.log(addressDocId)
  // 2. Naya order banao orders collection m
  await addDoc(collection(db, "customers", user.uid , "orders"), {
    items: orderItems,
    status: "Placed",
    orderDate: serverTimestamp()
  });

  // 3. Cart khali kar do taaki agla order new ho
const deletePromises = [];
bagSnap.forEach(doc => {
  deletePromises.push(deleteDoc(doc.ref)); // har delete ko promise me daalo
});

await Promise.all(deletePromises);
        namit = [];
          localStorage.setItem('val' , JSON.stringify(namit))
        
window.location.href = "/fruts-vegetable-website/files/placeorder.html"
  }
   })
  // if (totalPriceRu <= 0){
  //   alert("you have to add item in the bagitem")
  // }
}

 function placeOrder(){
  placeOrderI.innerHTML =  ` <button class="button40"> <a  class =  "placing" onclick = "placeorderinvestigation()">Place order</a></button> `
 }

function itemsQuantity(){
//   let totalPriceRu = 0;
    details.innerHTML = ' ';
itemBag.forEach((itemss)=>{
details.innerHTML+= `
                  <div class="details4">
                <div class="naming">
                <span class="fruits3">Fruit name </span>
                 <span class="iname3">${itemss.englishName}</span>
                 </div>
                 <div class="kilo2">
                 <span class="kilogram31">kilogram</span>
                 <span class="kquantity">${itemss.kilogram} kg</span>
                 </div>
                 <div class="priceitems">
                <span class="pri21">price</span>
                <span class="pAout">Rs ${itemss.price}</span>
                 </div>
                 </div>`
 }) }
   
// })
   function displayItems(){
     waitingItem.innerHTML = " ";
     itemsContainer23.innerHTML = ``;
     itemBag.forEach(items =>{
   itemsContainer23.innerHTML  += `<section class="items4">
                <div class="images3">
                   <img class="manish4" src = ../${items.images} alt="">
                </div>
                <div class = "printPrice1">
                 <h3 class="english33">${items.englishName}</h3>
                 <h3 class="hindi33">(${items.hindiName})</h3>
                <h2 class = "kg1" > kilogram : ${items.kilogram}Kg</h2>
                <h2 class = "naresh2">Price : ${items.price} Rs </h2>
                </div>
                <div class = "crossButton ">
                <button class = "buttonb"  onclick = "removeItem(${items.id}) "> <img class = "img32" src = ../${items.cross} alt="">  
                </button>
                </div>
               </section> 
                `
    })
  }
