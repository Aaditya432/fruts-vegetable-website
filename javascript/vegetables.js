let manshu;
let meenu;
let manju = [];
const vegetablesContainer = document.querySelector(".itemscontainer4");
let BagItem = document.querySelector(".Bag2")
// const list23 = document.querySelector(".list2")

function addToBag1(itemid) {
  mango.push(itemid)
  Mango1 = new Set(mango)
  namit = Array.from(Mango1)
  // localStorage.removeItem("val")
  localStorage.setItem("mango", JSON.stringify(mango))
  localStorage.setItem("val", JSON.stringify(namit))

}
mangoItems = localStorage.getItem("mango")
if (mangoItems != undefined) {
  mango = JSON.parse(mangoItems)
}
itemsValue = localStorage.getItem("val")
if (itemsValue != undefined) {
  namit = JSON.parse(itemsValue)
  console.log(namit)
}
else {
  namit = []
}
function displayBagItemsN(itemid) {
  addToBag1(itemid)
  //  console.log(namit)
  if (namit.length > 0) {
    BagItem.style.visitbility = "visible"
    BagItem.innerText = `bag items  ${namit.length}`
  }
  else {
    BagItem.style.visitbility = " hidden"

  }
}


function displayQuantity1() {
  manshu = manju.map((VId) => {
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i].id == VId) {
        vegetables[i].kilogram += 1;
        vegetables[i].price = vegetables[i].kilogram *   vegetables[i].price;
        return vegetables[i];
      }
      else if (vegetables[i].minusId == VId) {
        vegetables[i].kilogram -= 1;
        vegetables[i].price = vegetables[i].kilogram *  vegetables[i].price
        return vegetables[i];
      }
    }
  })
  manju.shift()
  localStorage.setItem("itemsPrice", JSON.stringify(vegetables))
}
meenu = localStorage.getItem("itemsPrice");
// console.log(mahesh);
if (meenu != undefined) {
  vegetables = JSON.parse(meenu);
}
//else {
//  vegetables = [];
//
console.log(vegetables)

function displayFruits4(Vsid) {
  manju.push(Vsid)
  displayQuantity1();
  // localStorage.setItem("value" , JSON.stringify(Meesho))
  vegetablesContainer.innerHTML = ' '
  vegetables.forEach(Vitems => {
    vegetablesContainer.innerHTML += `  <section class="items4">
                <div class="images5">
                    <img  class="manish4" src=../${Vitems.images} alt="">
                </div>
                <div class = "printPrice2">
                <button class="button3" onclick = "displayFruits4(${Vitems.id})">
                 <img src=../${Vitems.button4} alt="" class = "image57" >
                </button>
                <span class="manish1">${Vitems.kilogram}Kg =</span>
                <span class = "naresh1">${Vitems.price} Rs </span>
                  <button class="button4" onclick = "displayFruits4(${Vitems.minusId})">
                 <img src=../${Vitems.button5} alt="" class = "image58" >
                </button>
                </div>
                <h3 class="english4">${Vitems.englishName}</h3>

                 <h4 class="hindi4">(${Vitems.hindiName})</h4>
                 <button class = "button35" onclick = "displayBagItemsN(${Vitems.id})"> add-to-bag</button>
              </section>`
  }
  )
}
vegetables.forEach( items => {
  vegetablesContainer.innerHTML += ` <section class="items4">
                <div class="images5">
                    <img  class="manish4" src=../${items.images} alt="">
                </div>
                 <div class = "printPrice2">
                <button class="button3" onclick = "displayFruits4(${items.id})">
                 <img src=../${items.button4} alt="" class = "image57" >
                </button>
                <span class="manish1">${items.kilogram}Kg =</span>
                <span class = "naresh1">${items.price} Rs </span>
                 <button class="button4" onclick = "displayFruits4(${items.minusId})">
                 <img src=../${items.button5} alt="" class = "image58" >
                </button>
                </div>
                <h3 class="english4">${items.englishName}</h3>
                 <h4 class="hindi4">(${items.hindiName})</h4>
                 <button class = "button35" onclick = "displayBagItemsN(${items.id})">Add-to-bag</button>
              </section>`
})
