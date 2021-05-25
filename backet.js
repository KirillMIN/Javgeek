const BacketItem = {
    render(products) {
        return `<div class="products">
                    <div><b>Название</b>: ${products.product_name}</div>
                    <div><b>Цена за штуку.</b>: ${products.price}</div>
                    <div><b>Кол-во</b>: ${products.quantity}</div>
                    <div><b>Стоимость</b>: ${products.quantity * products.price}</div>
                </div>`;
    }
}

const Backet = {
    BacketListBlock: null,
    BacketButton: null,
    BacketItem,
    goods: [
        {
            id_product: 1,
            product_name: 'Одуванчики',
            price: 5000,
            quantity: 100,
        },
    ],
    create_backet() {
        this.BacketListBlock = document.querySelector('.backet-list');
        this.BacketButton = document.querySelector('.backet-btn');
        this.BacketButton.addEventListener('click', this.clearBacket.bind(this));

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(products => {
                this.BacketListBlock.insertAdjacentHTML('beforeend', this.BacketItem.render(products));
            });
            this.BacketListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товаров стоимостью ${this.getBacketPrice()}`);
        } else {
            this.BacketListBlock.textContent = 'Корзина пуста';
        }
    },
    getBacketPrice() {
        return this.goods.reduce(function (price, products) {
            return price + products.price * products.quantity;
        }, 0);
    },
    clearBacket() {
        this.goods = [];
        this.render();
    },
};
Backet.create_backet();