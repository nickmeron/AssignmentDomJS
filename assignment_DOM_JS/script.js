let sneakers = [["Jordan 1 Red Court",119.99],["Jordan 4 White Label",99.99],["Jordan 4 White Red",89.99],["Jordan 3 White",119.99],["Jordan 1 Legacy",99.99],["Jordan 1 Space",169.99],["Jordan 1 UNC",219.99],["Jordan 1 NRG",139.99],["Jordan 1 Orange",99.99]];
let cartItems = [];
let totalPrice = 0;
let cartIcon = document.getElementById("cartIcon");
let fullCart = document.getElementById("fullCartIcon");
let main = document.querySelectorAll(".itemContainer");
let itemName = document.getElementsByClassName("itemName");
let removeFromCart = document.getElementsByClassName("offCartbtn");
let navButtons = document.getElementsByClassName("menuItem");
let addItem = document.getElementsByClassName("toCartbtn");
let finalPriceIcon = document.getElementById("totalPriceIcon");
let finalPriceCart = document.getElementById("totalPriceCart");
let itemChosed;



for ( let i=0; i < addItem.length; i++){ // add item to cart
    let button = addItem[i];
    let counter = 0;
    button.addEventListener("click", (element)=>{
        counter++;
        itemChosed = element.target;
        cartItems.push(sneakers[i]);
        totalPrice += sneakers[i][1];
        itemChosed.style.backgroundColor="#c93031";
        itemChosed.innerHTML="Item Added x"+counter;
        cartIcon.style.display = "none";
        fullCart.style.display = "block";
        fullCart.style.background = "#189F57";
        finalPriceIcon.innerText = totalPrice
        finalPriceCart.innerText = "Total: "+totalPrice;
        console.log(cartItems);
        console.log(totalPrice);
        renderCartElement();
    })
}

function renderCartElement(){
cartItems.forEach((sneaker)=>{ // create HTML element for each cart array element

    //create elements
    let cartContainer = document.getElementById("cartContainer");
    let itemCart = document.createElement("div");
    itemCart.setAttribute("class","itemCart");
    let itemName = document.createElement("h2");
    itemName.setAttribute("class","itemName");
    let price = document.createElement("h2");
    price.setAttribute("class","price");

    //align elements
    cartContainer.appendChild(itemCart);
    itemCart.appendChild(itemName);
    itemCart.appendChild(price);
    
    //append values to the elements taken from the clicked eventlistener
    let imageOfItem = itemChosed.getElementsByClassName("item").innerHTML;
    let nameOfItem = sneaker[0];
    let priceOfItem = sneaker[1];
    itemName.innerText = nameOfItem;
    price.innerHTML = priceOfItem;

});
}
