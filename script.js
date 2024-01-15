let increment = document.querySelector("#add");
console.log(increment);
let decrement = document.querySelector("#sub");
console.log(decrement);
let result = document.querySelector("#display");
console.log(result);
let reset = document.querySelector("#reset");
console.log(reset);

let indx = 0;
increment.addEventListener("click",()=>{
  indx++;
  return result.innerText = indx;
});
decrement.addEventListener("click",()=>{
    indx--;
    if(indx < 0) console.log(alert("you will be getting an neagtive number"));
    return result.innerText = indx;
  });

  reset.addEventListener("click",()=>{
    indx = 0;
    return result.innerText = indx;
  });

