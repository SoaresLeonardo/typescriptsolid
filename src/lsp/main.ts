import { FiftyPercentDiscount } from './discout';
import { Messaging } from './message';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppcart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppcart, messaging, persistency);

shoppcart.addItem(new Product('Camiseta', 10));
shoppcart.addItem(new Product('Caderno', 5.54));

console.log(shoppcart);
console.log(shoppcart.total());
console.log(shoppcart.totalWidthDicount());
order.checkout();
console.log(order.orderStatus);
