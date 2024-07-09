let books = ["eloquent in javasript","javascript",
    "mill and boons","perfect stranger","shutter island"
]
let oneBook ={
    title:"eloquent javascript",
    author:"melisa i dont know her last name",
    publisher:"no starch press house"
}
function loolpThorughBooks(books){
    for( let i = 0;i< books.length;i++){
        // this is where the statements goes.
        // console.log(i < 7)
        // console.log(i)
        // the console.log uses [i] to access the book array using the bracket notation.
        console.log(books[i])
    }
   
}


loolpThorughBooks(books)
console.log(books.length);

//  for ... loop has the following 
/*
1. initializer- a varibale decalred when the loop begins
2.condition - stop consition
3. final expression- last step of iteration
4.statement- what happens during each iteration */ 

// FOR... OF 
function loopThroughBooksArray(books){
    // a for of is someting that allows us to iterate loop through any iterable object.
    // unlike the for ... loop, the for .. of automatically stops at teh end of the item its looping over. therfore 
    // no last part to increamnet. 
    for(let book of books){
        console.log(book)

    }
}
//  for ...in loop
function loopThroughObject(obj){
    for ( let key in obj){
        // accessing the keys in the object oneBook.
        console.log(key)
        // accession values in a object we use bracket notation instead of 
        // dot notation.
        console.log(obj[key])
    }

}

loopThroughObject(oneBook)

// shoppingList[x]=document.getElementsById("textlist").value;
// return `${shoppingList[x]}`;
// x++;
// ;

for (let item of array){
    shoppingList.push(item)
}
console.log(shoppingList);





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