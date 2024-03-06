let shoppingCart = {
    items: [],
    total: 0,

    addItem: function(name, price, quantity) {
        this.items.push({name: name, price: price, quantity: quantity});
        this.total = total + price * quantity;
    }

    removeItem: function(name)
}