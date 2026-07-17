// const image = document.querySelector(".hamburger")
const container = document.querySelector(".container")
// const para = document.querySelector(".container2")
const main = document.querySelector(".contet")
const signup= document.querySelector(".signup")
const signup1 = document.querySelector(".signup1")
// image.addEventListener("click" , ()=>{
// // container.classList.toggle('container')
// container.classList.toggle("container2")
// container.classList.remove("container2")
// }
// )
signup.addEventListener("click" , ()=>{
signup1.classList.toggle("signup3")
})
document.querySelector(".imaging").addEventListener("click" , ()=>{
signup1.classList.toggle("signup3")
})
document.querySelector(".sig").addEventListener("click" , (e)=>{
    e.preventDefault()
    console.log("madhav")
})

// const url = "https://static.openfoodfacts.org/data/openfoodfacts-products.jsonl.gz"

// async function getData(){
//  const data = await fetch(url)
//  const response = data.json()
//  console.log(response)
// }

// const input = document.querySelector(".text")
// // const value = input.value.trim()
// const search = document.querySelector(".images")
//    const content= document.querySelector(".middle")

// async function getData(name) {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//      const dat =await response.json()
//     //  console.log(dat)
//      dat.meals.forEach(element => {
//      content.innerHTML +=
//                       ` <section class="container3">
//                         <img class = "set" src= ${element.strMealThumb} alt="">
//                         </section>
//                        `
//               })
//          }
// search.addEventListener("click" , async ()=>{
//  const value = input.value.trim()
//  await getData(value)
// })


