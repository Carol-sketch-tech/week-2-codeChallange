// parent function
// function displayList(){

// const input =document.getElementById('button');
// input.addEventListener('click',function(){
//     return newShoppingList();
// })
//     //  create another function ot callbakc on inside the outer fucntion to 
//     // push the new elements added through the index text field to the new array.
// function newShoppingList(){
//      // initialize an empty array.
//     let shoppingList = [];
//     for (let item of array){
//         shoppingList.push(item)
//     }
//     console.log(shoppingList);
// }
// console.log(newShoppingList)
// // adding an event listener to the button "click to add"
// }
// // this is to console.log the new array that has the added items that are to be displayed in the shoping list.
// console.log(displayList());



// const input = document.getElementById('button');
// button.addEventListener("click",function(){
//     const newValue = prompt('Enter a value to add:');
//     shoppingList.push(newValue);
//     console.log("update array:",shoppingList);
// });


// function definesTheParentFunction(){
//     //  initialize array
//    myArray=[];
//  //getting the tag button using the getElementById() method.
//    const addingEventToButtonTag =document.getElementById('button');
  

// function returnNewArrayWithElements(){
//     myArray.push(input.textContent);
// }

// input.addEventListener('click', returnNewArrayWithElements)
// //initializing the callback function for the second argument of addEventListener()
// function addingElementsToNewArray(){
//      myArray.push()
// }
// this is to console.log the new array that has the added items that are to be displayed in the shoping list.


// // retireve input value using 
// // parent function.
// function buttonClickEvent(){
//     const buttonEvent=document.getElementById("button")
    
// function inputToArray(items,shoppingList){
// const listInput=document.getElementById("shoppingList")
// // initialize an empty array.
// let shoppingList= [];
// // to separate items in the input field with commas
//  const items= listInput.split(",").map((items));
// //  use of the spread operators makes a clone of the orignal array to not change the original array
// // when new items are moved pushed to the array.
// for(let items of shoppingList){
//  shoppingList.push(...items);
//  console.log(shoppingList);}
// }
// buttonEvent.addEventListener('click',inputToArray())
// }
// BEGIN ANOTHER SCOPE CHAIN TO make the code work.

// initalizing an empty array.
const myArray=[]
// access the id inputText
const input=document.getElementById("inputText")
// accessing hte id result
const results=document.getElementById('resultList')
// Accessing the Addbutton, creating a callback fucntion and attaching an event listener.
const markAsBought =document.getElementById('markAsPurchased')


function thatCreatesAnewArray(){
    // inputValue stores text put in the input field and stores it in the variable inputValue
    const inputValue=input.value
    // creates a new array by retrieving the current value in a form.
   return myArray.push(inputValue)
}
// accessing the addButton element.
const addButton=document.getElementById('addButton').addEventListener('click',thatCreatesAnewArray)
// creating a display Array
function displayNewArray(){
    let output='';
    for (let i =0; i< myArray.length; i++){
        
    }
    results.innerHTML= output;
}
// creating a callback function,second argument for the addEventListener.
// function AddsItemsFromInputFieldFromHtmlAndDisplay(){
// let output = 
// // code for adding elements from the input field of Html.

// }
// // // attaching an event lsitener
// addButton.addEventListener('click',)


// // marking bought items to show that they have been bought.we can yse a check list
// // and add an event listener.
function markAsPurchased(){
    // write code here
}
// attaching an eventListener
markAsPurchased.addEventListener('click',markAsPurchased)
// how do i add a checkList to mark as tick when an item is bought



// Accessing the clearList id, creating a callback fucntion and attaching an event listener. 
// attach an event listener to clear the list of items.
const clearButton =document.getElementById('clearList').addEventListener('click',function (){
    const removeFromList=document.getElementById('inputText').remove;
    return
})
// creating a callback function.
function clearListOfItems(){
// // enter code here to clear list.
}
// attaching an event listener.
clearButton.addEventListener('click',)