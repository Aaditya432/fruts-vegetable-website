const containerinner = document.querySelector('containerinner');
const details45 = document.querySelector("itemsDetails45");

let orderItem;
function itemsorder() {
  orderItem = namit.map(item => {
    for (let i = 0; i < products.length; i++){
      if (item == products[i].id)
        return products[i]
    }
  })

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

  orderItem.forEach(item => {
    containerinner.innerHTML +=    `    <div class="images38">
                    <img  class="manish89" src=../${item.images} alt="">
                </div>
                `
  });
}