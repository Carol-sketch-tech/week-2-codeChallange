// initalize an empty array 
const emptyArray=[];

// code to display items in input field in a list.
const input=document.querySelector("input#inputText")
const resultList=document.createElement('li')
function displayInputValue(){ 
 const pushedItems = emptyArray.push(input.value);
 function displayInresultListDiv(item){
    
    resultList.textContent=item;
    resultList.item(pushedItems);
 }
 console.log(displayInresultListDiv);
}
const addButton=document.querySelector("button#addButton").addEventListener('click',displayInputValue);

// function to mark list as purchased.
const markedAsPurchased=document.querySelector("button#markedAaPurchased");
// function to mark items in list as purchased.
function markedAsPurchased(){
 resultList.classList.toogle('purchased')
}
markedAsPurchased.addEventListener('click',markedAsPurchased);

// code to clear the list 
const clearList=document.querySelector("button#clearList");
const shoppingList= document.querySelector("resultList")
// fucntion to clear list after being purchased.
function clearList(){
    emptyArray.length=0;
    shoppingList.innerHtml='';
}
clearList.addEventListener('click',clearList);