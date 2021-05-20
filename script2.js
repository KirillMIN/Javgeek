var my_basket = [{'type':'bananas','price': 100,'weight':100},
                {'type':'apples','price': 20,"weight": 100}]


 function BasketPrice(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i].price;
            }
            return sum;
        }
