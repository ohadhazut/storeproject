let productsList = [
    
    ['car', 15],
    ['beer', 20],
    ['watter', 22]
];

let shop = [];

function addProduct(productName, productPrice) {
    shop.push([productName, productPrice]);
    renderProductList(shop);
    console.log(shoppingCart);
}

function ProductList() {
    shoppingCart = [];
    console.log(shoppingCart);
}

function renderProductList(cart) {

    for (let i = 0; i < cart.length; i++) {

        let nameText = document.createTextNode(cart[i][0]);
        let nameHolder = document.createElement('n');
        nameHolder.append(nameText);
        console.log(nameText);

        let priceText = document.createTextNode(cart[i][1] + "ILS");
        let priceHolder = document.createElement('p');
        priceHolder.append(priceText);
       
        console.log(priceText);

        let removeBtn = document.createElement('button');
    
       
       
        let finalRow = document.createElement('div');
        finalRow.classList.add("productCtr");
        finalRow.append(nameHolder, priceHolder, removeBtn);
        let itemRow = document.getElementById('itemsList');
        itemRow.appendChild(finalRow);
        removeBtn.onclick = function (event) {
            finalRow.remove();
        };
    }
    console.log(cartArray);
    ProductList();
}

function clearCart(){
    let getElement = document.getElementById('itemsList');
    getElement.innerHTML = "";
}