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
// BEGIN ANOTHER SCOPE CHAIN TO make the code work.


// Accessing the Addbutton, creating a callback fucntion and attaching an event listener.
// accessing the addButton element.
const addButton=document.getElementById('addButton')
// creating a callback function,second argument for the addEventListener.
function AddsItemsFromInputFieldFromHtml(){
    // code for adding elements from the input field of Html.
}
// attaching an event lsitener
addButton.addEventListener('click',)


// marking bought items to show that they have been bought.we can yse a check list
// and add an event listener.
function markItemInListAsBought(){
    // write code here
}
// attaching an eventListener
.addEventListener('click')
// how do i add a checkList to mark as tick when an item is bought



// Accessing the clearList id, creating a callback fucntion and attaching an event listener. 
// attach an event listener to clear the list of items.
const clearButton =document.getElementById('clearList')
// creating a callback function.
function clearListOfItems(){
// enter code here to clear list.
}
// attaching an event listener.
clearButton.addEventListener('click',)