const shopInput = document.getElementById('inputText')  
const clearButton = document.getElementsByClassName('clearList') [0]
const shopList = document.getElementById('shopList') 
const addButton = document.getElementsByClassName('addButton')[0] 
//creates an empty array where items are pushed.
let shoppingArray = [] 
// adding shopping list
function addshopping(){
     //creates an initial empty shopping list
  shopList.innerHTML = ''
// iterates through each object in the list.
  shoppingArray.forEach( 
    function(item,index){// 'itemName'a span for the name of the item, 'deleteButton' and 'purchased button'

// creating DOM nodes of display results.
       const li = document.createElement('li')
       const itemName = document.createElement('span')
       const deleteButton = document.createElement('button')
       const purchasedButton = document.createElement('button')
    
     
itemName.textContent = item.name // text content to be stored in name object
deleteButton.textContent = 'delete'
deleteButton.className = 'deleteButton'
purchasedButton.textContent = item.purchased ? 'purchased' : 'mark purchased'//checks whether item.purchased is true if it is true
//then text will be purchased otherwise it will remain mark purchased
purchasedButton.className = 'purchased'
deleteButton.style.marginLeft = '350px'

if(item.purchased){          
   li.classList.add('purchased')
}
// append to DOM
li.appendChild(itemName)
li.appendChild(deleteButton)
li.appendChild(purchasedButton)
shopList.appendChild(li)

// adding eventListeners for purchasd items.
purchasedButton.addEventListener('click',function(){
   shoppingArray[index].purchased = !shoppingArray[index].purchased
   addshopping()
})
// adding an event listener for deleting an item.
deleteButton.addEventListener('click',function(){
   shoppingArray.splice(index,1)
   addshopping()
})})}
function additems(){
    const inputValue = shopInput.value.trim()
    if(inputValue === ''){
        return
    }
    // pushing object into the an Empty array
    shoppingArray.push({ 
       name:inputValue,
       purchased:false  
    })
     // empties the input
    shopInput.value = ''
    addshopping()}
//  function that clear the whole list
 function clearList(){
    shoppingArray = [] 
    addshopping()}
 addButton.addEventListener('click',additems)
 clearButton.addEventListener('click',clearList) 
 