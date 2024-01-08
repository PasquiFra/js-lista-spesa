console.log ("JS OK");

// imposto il dom degli elementi

const groceryList = document.getElementById("grocery-list");

const products = ["dentifricio", "latte", "biscotti", "acqua", "uova", "affettati", "pasta", "zucchero", "sale", "pepe", "frutta", "verdura"];

console.table(products);

let i = 0; 

while (i < products.length) {
    
    groceryList.innerHTML += `<li class="list-group-item rounded">${products [i]}</li>`;
    console.log(groceryList, "i:", i);

    i++;
}