const readlineSync = require('readline-sync');

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

// Попробую тут прикрутить readline sync
// Написано криво, но вроде работает, что не может не радовать
itemsInShop = ['ultrapen - 21.99$', 'playstation 5 - 44.99$', 'amogus - 18.87$'];
index = readlineSync.keyInSelect(itemsInShop, 'Which item you want to add?');

let key = 0;
MAX = 60, MIN = 0, value = 30, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log('\nA value the user requested: ' + value);

if (index === 1) {
    shoppingCart.addItem('ultrapen', 21.99, value);
} else if (index === 2) {
    shoppingCart.addItem('playstation 5', 44.99, value);
} else if (index === 3) {
    shoppingCart.addItem('amogus', 18.87, value);
};

console.log(shoppingCart);