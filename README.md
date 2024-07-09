# week-2-codeChallange

## Creating a Shopping List
The website List-er is to help create a shopping list where one 
can list items that they need or are required to go buy in an input filed that has
a placeholder text "enter item", when the items are bought one can mark the items bought to which have been bought and which ones are yet to be bought. After all the items have been bought, the list can be cleared and another created created by listing the items.

### User interactive page
The rendered page in the browser is user interactive as it has an input field where one can list the items that are required to be bought.There are three buttons each with their work or event to perform.
 1. Add button - when clicked, it adds the items listed in the inout field to an empty array creating a list that 
    is displayed.
 2. Mark Purchased button - when clicked it marks the items as bought showin the user that the items have      
    been bought.
 3. Clear List button - when clicked it clears the new array that was created when the add button was clicked and 
   returns the original array which was an empty array.

For this button to be interactive, nodes of the DOM but be accessed by Javascript by document.getElementById ()
so as to add event listeners to the buttons. This makes 'something happen' ( an event occurs like displaying an list in items that had been entered into inout field) when the button are clicked.