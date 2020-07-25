"use strict";

console.log("Task 1");

const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
      discount = value;
    },
    showOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      balance -= cost;
      orders.push(order);
    },
  };
  
  account.changeDiscount(0.15);
  console.log(this.discount); // 0.15
  
  console.table(this.showOrders()); // ['order-1', 'order-2', 'order-3']
  
  account.addOrder(5000, 'order-4');
  console.log(this.balance); // 19000
  console.table(this.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']