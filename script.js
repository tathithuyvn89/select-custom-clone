// import Select from "./select.js"

// const selectElements = document.querySelectorAll("[data-custom]")
// console.log('selectElements', selectElements);
// selectElements.forEach(selectElement => {
//   new Select(selectElement)
// })

import Select from "./select.js";

const selectElements = document.querySelectorAll('[data-custom]')
selectElements.forEach(selectEle=>{
    // new Select(selectEle)
    console.log(new Select(selectEle));
})