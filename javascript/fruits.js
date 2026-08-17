let Meesho;
let mahesh;
let manish = [ ];
let mango = [  ];
let Mango1;
let itemsValue
let namit;
  let BagItems = document.querySelector(".Bag1")
const fruitsContainer = document.querySelector(".itemscontainer3") ;
// const fruitsLink = document.querySelector(".list3")
// fruitsLink.addEventListener("click", (e) => {
//   e.preventDefault()
//  if(auth.currentUser){
//    window.location.href = "/fruts-vegetable-website/files/frutis.html"
//  }
//   else{
//     alert("please sign in then see content")
//     window.location.href = "/fruts-vegetable-website/index.html"
//   }
  
// })

 function addToBag(itemid){
            mango.push(itemid)
           Mango1 = new Set(mango)
            namit =Array.from(Mango1)
            // localStorage.removeItem("val")
            localStorage.setItem("mango", JSON.stringify(mango) )
           localStorage.setItem("val" , JSON.stringify(namit))
          
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
 function displayBagItems(itemid){
          addToBag(itemid)
    //  console.log(namit)
             if(namit.length > 0){
              BagItems.style.visitbility = "visible"
         BagItems.innerText = `bag items  ${namit.length}`
             }
             else{
              BagItems.style.visitbility = " hidden"

             }
            }
// function displayQuantity( ){
//      Meesho = manish.map((fId)=>{ 
//    for(let i = 0; i < fruits.length; i++){
//   if(fruits[i].id ==fId ){ 
//             fruits[i].kilogram += 1;
//            fruits[i].price1 = fruits[i].kilogram * fruits[i].price;
//                   return fruits[i]
//        }
//             else if (fruits[i].minusId == fId )
//   {
    
//              fruits[i].kilogram  -= 1;
//              fruits[i].price1 = fruits[i].kilogram * fruits[i].price
//                     return fruits[i]
//              }   
//        }})
//        manish.shift()
//        localStorage.setItem("value" , JSON.stringify(fruits))
//     } 
// mahesh = localStorage.getItem("value");
// // console.log(mahesh);
// if(mahesh != undefined ){
// fruits  = JSON.parse(mahesh);
// }
// else{
// frutis = [ ]
// }
function displayFruits2( fruitsid ){
        manish.push(fruitsid)
         displayQuantity();
        // localStorage.setItem("value" , JSON.stringify(Meesho))
      fruitsContainer.innerHTML = ' '
            fruits.forEach(fitems =>{
            fruitsContainer.innerHTML +=`  <section class="items3">
                <div class="images3">
                    <img  class="manish3" src=../${fitems.images} alt="">
                </div>
                <div class = "printPrice">
                <button class="button2" onclick = "displayFruits2(${fitems.id})">
                 <img src=../${fitems.button4} alt="" class = "image56" >
                </button>
                <span class="manish">${fitems.kilogram}Kg =</span>
                <span class = "naresh">${fitems.price1} Rs </span>
                  <button class="button3" onclick = "displayFruits2(${fitems.minusId})">
                 <img src=../${fitems.button5} alt="" class = "image57" >
                </button>
                </div>
                <h3 class="english3">${fitems.englishName}</h3>

                 <h4 class="hindi3">(${fitems.hindiName})</h4>
                 <button class = "button34" onclick = "displayBagItems(${fitems.id})"> add-to-bag</button>
              </section>`
}
)
}
fruits.forEach(items => {
fruitsContainer.innerHTML += `  <section class="items3">
                <div >
                    <img  class="manish3" src=../${items.images} alt="">
                </div>
                <div class = "printPrice">
                <button class="button2" onclick = "displayFruits2(${items.id})">
                 <img src=../${items.button4} alt="" class = "image56" >
                </button>
                <span class="manish">${items.kilogram}Kg =</span>
                <span class = "naresh">${items.price1} Rs </span>
                 <button class="button3" onclick = "displayFruits2(${items.minusId})">
                 <img src=../${items.button5} alt="" class = "image57" >
                </button>
                </div>

                <h3 class="english3">${items.englishName}</h3>

                 <h4 class="hindi3">(${items.hindiName})</h4>
                  <button class = "button34" onclick = "displayBagItems(${items.id})">Add-to-bag</button>
              </section>`
})

