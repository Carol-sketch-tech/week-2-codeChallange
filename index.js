document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const shoppingList = document.getElementById('shoppingList');
    
    const items = [];

    addButton.addEventListener('click', () => {
        const newItem = itemInput.value.trim();
        if (newItem) {
            items.push(newItem);
            addItemToDOM(newItem);
            itemInput.value = '';
        }
    });

    clearButton.addEventListener('click', () => {
        items.length = 0;
        shoppingList.innerHTML = '';
    });

    function addItemToDOM(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('purchased');
        });

        shoppingList.appendChild(listItem);
    }
});