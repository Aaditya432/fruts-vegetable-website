import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC-YvuHU_0xSWt5NdLHxavQe6mQCnjuBpl",
    authDomain: "fruitsvegetable-website.firebaseapp.com",
    projectId: "fruitsvegetable-website",
    storageBucket: "fruitsvegetable-website.firebasestorage.app",
    messagingSenderId: "930353495099",
    appId: "1:930353495099:web:4b0beba40fea843426b01e"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

let products = [];

let itemBag;
let Bags;
 mango = [ ];
console.log(namit);
  // Page load hote hi Firebase se cart uthao
  async function loadCart(){
    // const cartContainer = document.querySelector('.itemscontainer234'); // tumhare cart wale div ki class
    // cartContainer.innerHTML = ""; // pehle khali karo

    const snapshot = await getDocs(collection(db, "products"));
      snapshot.forEach(docSnap => {
      const itemsimp = docSnap.data();
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
    
    if(snapshot.empty){
        
      cartContainer.innerHTML = "<h2>Cart Khali hai</h2>";
      return;
    }
    
  }



 // data = fruits.concat(vegetables)
const itemsContainer23 =  document.querySelector(".itemscontainer234");
const  details =  document.querySelector(".itemsDetails");
const quantity =document.querySelector(".Quantityitem");
const totalPrice = document.querySelector(".totalprice");

onload();
function onload(){
  loadCart();
       itemsFruits();
    displayItems();
    quantityNumbers();
    itemsQuantity();
    displayTotalPrice();
}
console.log(data)
function itemsFruits(){
  console.log(products);
itemBag = namit.map(item =>{
    for(let i = 0; i < products.length; i++){
    if(item == products[i].id ){
    return products[i];
    }
}

})
 
  console.log(itemBag)
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

function removeItem(itemid){
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
             itemsFruits();
            displayItems();
            // displayLength();
            quantityNumbers();
            itemsQuantity();
            displayTotalPrice();
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
    let totalPriceRu = 0;
    itemBag.forEach((itemsss)=>{
     totalPriceRu +=  itemsss.price ; 
    })
  totalPrice.innerHTML =    ` 
            <div class="tota">
                <span class="price">totalprice</span>
                <span class="rupees">Rs ${totalPriceRu}</span>
            </div> `

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
    
  

  // Delete button ka function
  // window.deleteItem = async function(id){
  //   await deleteDoc(doc(db, "products", id));
  //   location.reload(); // refresh karke wapas load hoga
  // }
// function displayItems(){
//     itemsContainer23.innerHTML = ' ';
// itemBag.forEach((items)=>{
// itemsContainer23.innerHTML  += `<section class="items4">
//                 <div class="images3">
//                     <img  class="manish4" src=../${items.images} alt="">
//                 </div>
//                 <div class = "printPrice1">
//                  <h3 class="english33">${items.englishName}</h3>
//                  <h3 class="hindi33">(${items.hindiName})</h3>
//                 <h2 class = "kg1" > kilogram : ${items.kilogram}Kg</h2>
//                 <h2 class = "naresh2">Price : ${items.price} Rs </h2>
//                 </div>
//                 <div class = "crossButton ">
//                 <button class = "buttonb"  onclick = "removeItem(${items.id}) "> <img class = "img32" src = ../${items.cross} alt="">  
//                 </button>
//                 </div>
//                </ section> 
//                 `
// })
// }
