const checkoutUl = document.querySelector('.items-in-checkout');

function getItemsInLocalStorage(){
    let itemsInLocalStorage = localStorage.getItem('itemsInLocalStorage');

    // convert all items that are strings to array
    itemsInLocalStorage = itemsInLocalStorage.split(',');

    // loop over the array, create an <li>, append the item string to the <li>, append the LI to the items-checkout <ul>
    itemsInLocalStorage.map(item =>{
        const li = document.createElement("li");
        const textNode = document.createTextNode(item);
        li.appendChild(textNode);
        checkoutUl.appendChild(li);  
    })

}


getItemsInLocalStorage();