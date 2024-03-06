const shoppingCart = {
    items: [], // Массив товаров
    total: 0,  // Общая стоимость товаров
  
    // Метод добавления товара в корзину
    addItem: function(name, price, quantity) {
      const item = {
        name: name,
        price: price,
        quantity: quantity
      };
      this.items.push(item);
      this.calculateTotal(); // Обновляем общую стоимость
    },
  
    // Метод удаления товара из корзины по имени
    removeItem: function(name) {
      this.items = this.items.filter(item => item.name !== name);
      this.calculateTotal(); // Обновляем общую стоимость
    },
  
    // Метод обновления количества товара
    updateQuantity: function(name, quantity) {
      const item = this.items.find(item => item.name === name);

      if (item) {
        item.quantity = quantity;
        this.calculateTotal(); // Обновляем общую стоимость
      }
    },
  
    // Метод вычисления общей стоимости товаров в корзине
    calculateTotal: function() {
      this.total = this.items.reduce((totalCost, item) => totalCost + item.price * item.quantity, 0);
    },
  
    // Метод очистки корзины, который ее, собственно, обнуляет
    clearCart: function() {
      this.items = [];
      this.total = 0;
    }
    // Пока скидку не реализовал
  };

shoppingCart.addItem('asas', 1, 3);
shoppingCart.applyDiscount('DISCOUNT10');
console.log(shoppingCart.total);