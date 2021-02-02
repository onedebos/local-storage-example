let itemsInCart = {
  totalItems: 0,
  itemNames: [],
};

const addToCartBtn = document.querySelector(".add-to-cart");
const itemCountSpan = document.querySelector(".item-count");
const itemsInCartUl = document.querySelector(".items-in-cart");
const ITEMS_IN_LOCALSTORAGE_KEY = 'itemsInLocalStorage';


function addToCart() {
  itemsInCart.totalItems += 1;
  const itemName = `new item ${itemsInCart.totalItems}`;
  itemsInCart.itemNames.push(itemName);

  // display the updated no of items in cart on the frontend
  itemCountSpan.innerHTML = itemsInCart.totalItems;

  // create a new <li> element
  const li = document.createElement("li");

  // create a new textnode to store the itemName
  var textnode = document.createTextNode(itemName);

  // append the text to the <li>
  li.appendChild(textnode);

  // append the li to the <ul>
  itemsInCartUl.append(li);

  // add the new item to local storage
  addToLocalStorage(itemsInCart.itemNames);
}



function addToLocalStorage(items) {
  localStorage.setItem(ITEMS_IN_LOCALSTORAGE_KEY, items);
  const allItemsInLocalStorage = localStorage.getItem(ITEMS_IN_LOCALSTORAGE_KEY);

  console.log("Showing all items in Local Storage: ", allItemsInLocalStorage);
}



// this function will check if there are items in localStorage when the page loads
// if there are items in LS, it'll list everything on the page and also update itemsInCart
// if there aren't items in LS, it'll do nothing
function loadItemsFromLocalStorage(){

        if(!localStorage.getItem(ITEMS_IN_LOCALSTORAGE_KEY)){
            return;
        }

        let itemsInLocalStorage = localStorage.getItem(ITEMS_IN_LOCALSTORAGE_KEY);
    
        // convert all items that are strings to array
        itemsInLocalStorage = itemsInLocalStorage.split(',');

        // put all the items in localStorage into our itemsInCart.itemNames array
        itemsInCart.itemNames = itemsInLocalStorage;

        // update no of items in cart
        itemsInCart.totalItems = itemsInLocalStorage.length;
        itemCountSpan.innerHTML = itemsInCart.totalItems;


        // loop over the array, create an <li>, append the item string to the <li>, append the LI to the items-checkout <ul>
        itemsInLocalStorage.map(item =>{
            const li = document.createElement("li");
            const textNode = document.createTextNode(item);
            li.appendChild(textNode);
            itemsInCartUl.appendChild(li);  
        })


}

function clearEverything(){
    localStorage.removeItem(ITEMS_IN_LOCALSTORAGE_KEY);
}


addToCartBtn.addEventListener("click", addToCart);
loadItemsFromLocalStorage();