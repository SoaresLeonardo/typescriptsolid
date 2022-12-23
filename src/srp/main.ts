import { Messaging } from './message';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const shoppcart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppcart, messaging, persistency);

shoppcart.addItem(new Product('Camiseta', 10));
shoppcart.addItem(new Product('Caderno', 5.54));

console.log(shoppcart);
console.log(shoppcart.total());
order.checkout();
console.log(order.orderStatus);
