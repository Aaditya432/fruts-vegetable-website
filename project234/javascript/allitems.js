let Vishal;
let nishu;
let  nirala = [ ];
 data = fruits.concat(vegetables)
let itemLength = document.querySelector(".Bag6")
const allItemsContainer = document.querySelector(".itemscontainer");
// const list25 = document.querySelector(".list4");
 function addToBag2(itemid){
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
 function displayBagItemsNV(itemid){
          addToBag2(itemid)
    //  console.log(namit)
             if(namit.length > 0){
              itemLength.style.visitbility = "visible"
         itemLength.innerText = `bag items  ${namit.length}`
             }
             else{
              itemLength.style.visitbility = " hidden"

             }
            }

// function displayQuantity2( ){
//      Vishal = nirala.map((AId)=>{ 
//    for(let i = 0; i < data.length; i++){
//   if(data[i].id == AId ){ 
//             data[i].kilogram += 1;
//            data[i].price = data[i].kilogram * 50;
//                   return data[i]
//        }
//             else if (data[i].minusId == AId )
//             {
//              data[i].kilogram  -= 1;
//              data[i].price = data[i].kilogram * 50
//                     return data[i]
//              }   
//        }})
//        nirala.shift()
//        localStorage.setItem("allitem" , JSON.stringify(data))
//     } 
//  nishu = localStorage.getItem("allitem");
// // console.log(mahesh);
// if(nishu != undefined ){
// data  = JSON.parse(nishu);
// }
// else{
// data = [ ]
// }

function displayFruits5( fvsid ){
          allItemsContainer.innerHTML = ' '
        data.forEach( (Atems) =>{
          allItemsContainer.innerHTML +=    ` <section class="items">
                <div class="images3">
                    <img  class="manish" src=../${Atems.images} alt="">
                </div>
                  <div class = "printPrice3">
                <span class="manish2">${Atems.kilogram}Kg =</span>
                <span class = "naresh2">${Atems.price} Rs </span>
                </div>
                <h3 class="english">${Atems.englishName}</h3>
                 <h4 class="hindi">(${Atems.hindiName})</h4>
                    <button class = "button37" onclick = "displayBagItemsNV(${Atems.id})">Add-to-bag</button>
              </section>`
})

}


data.forEach( (items) =>{
    allItemsContainer.innerHTML +=  `   <section class="items">
                <div class="images3">
                    <img  class="manish" src=../${items.images} alt="">
                </div>
                  <div class = "printPrice3">
                <span class="manish2">${items.kilogram}Kg =</span>
                <span class = "naresh2">${items.price} Rs </span>
                </div>
                <h3 class="english">${items.englishName}</h3>
                 <h4 class="hindi">(${items.hindiName})</h4>
                <button class = "button37" onclick = "displayBagItemsNV(${items.id})">Add-to-bag</button>
              </section>`
})

