// retireve input value using 
// parent function.
function buttonClickEvent(){
    const buttonEvent=document.getElementById("button")
    
function inputToArray(items,shoppingList){
const listInput=document.getElementById("shoppingList")
// initialize an empty array.
let shoppingList= [];
// to separate items in the input field with commas
 const items= listInput.split(",").map((items));
//  use of the spread operators makes a clone of the orignal array to not change the original array
// when new items are moved pushed to the array.
for(let items of shoppingList){
 shoppingList.push(...items);
 console.log(shoppingList);}
}
buttonEvent.addEventListener('click',inputToArray())
}

console.log(buttonClickEvent())
