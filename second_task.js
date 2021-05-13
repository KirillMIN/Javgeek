// a
var my_basket = [{'product': 'bananas',
               'price': 100,
               'weight':100},
               {'product': 'apples',
               'price': 20,
               "weight": 100}]
// b
let basketPrice = 0;
        for (let prod of my_basket){
            basketPrice += prod.price;
            console.log("Товар " + prod.product + " стоит: " + prod.price + ' вес:' + prod.weight);
        }