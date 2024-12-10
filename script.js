let userInput = document.getElementById("user-input");
let checkBtn = document.getElementById("check-btn");
let clearBtn = document.getElementById("clear-btn");
let result = document.getElementById("results-div");
function verificanumar() {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if (userInput.value === "") {
    alert("Please provide a phone number");
  }
  else if (regex.test(userInput.value)) {
    result.innerHTML = "Valid US number: " + userInput.value;
  }
  else {
    result.innerHTML = "Invalid US number: " + userInput.value;
  }
}
checkBtn.addEventListener("click", verificanumar);
clearBtn.addEventListener("click", function() {
    result.innerHTML = "";
});




// const userInput=document.getElementById("user-input");
// const checkBtn=document.getElementById("check-btn");
// const clearBtn=document.getElementById("clear-btn");
// const result=document.getElementById("results-div");
// checkBtn.addEventListener('click', ()=>{
//   if(userInput.value===""){
//     alert("Please provide a phone number")}
//     else{
//       checkPhone()
//     }
//   })
// clearBtn.addEventListener('click', ()=>{
//   result.innerHTML="";
// })
// function checkPhone(number) {
//   let valid = number.replace(/[^\d]/g, '');
//   let last7 = valid.slice(-7);
//   if  (
//     ((/^\d{3}\d{4}$/.test(last7)) && valid.length === 10) ||
//     (valid.length === 11 && valid[0] === '1' && /^\d{3}\d{4}$/.test(last7))
//   ) {
//     result.innerText=`Valid US number: ${userInput.value}`
//   } else {
//     result.innerText=`Invalid US number: ${userInput.value}`
//   }
// }
// checkPhone("1 555)555-5555")