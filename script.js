// initalize empty array
const ShoppingList =[];
// accessing DOM nodes using getElementById()
const inputField=document.getElementById('inputText')
const addButton=document.getElementById('addButton')
const markAsPurchased=document.getElementById('markAsPurchased')
const clearButton=document.getElementById('clearList')
const listOfItems=document.getElementById('resultList')

// adding event listeners to varibale that stores the elemenets
addButton.addEventListener('click',addItem);
// event listener for mark as apurchased
markPurchased.addEventListener('click',markPurchased);
// event lsitener to celar list
clearButton.addEventListener('click',clearList);

// function to add an item to the list 
function addItem(){
    const item=itemInput.value.trim();
    if(item!== ""){
        renderList();
        itemInput="";    }
}

// function to mark items as purchased
function markedPurchased(){
    const selectefdItems=itemList.querySelelctorAll("li.selected");

    // looping through the items and mark them as purchased.
    if (index!== -1){
        ShoppingList[index]='{${item.textContent}}';
        renderList();
    }
}

// function to clear list 
function clearList(){
    // clear shopping list array
    ShoppingList.length =0

    // clear the list container
    while(itemList.firstChild){
        itemList.firstChild.remove();
    }

}

// fucntion ot render the shopping list
function renderList(){
    while(itemList.firstChild){
        itemList.firstChild.remove();
    }
}
// iterating through the shopping list array and add items to the 
// list container
for (const item of ShoppingList){
  const li=ducument.createElement('li');
  li.textContent=item.replace(/^{.*}$/g,"");
  if (item.includes('{')){
    li.classList.add("selected");
  }
}

renderList()