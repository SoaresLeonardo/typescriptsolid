import { EnterpriseCustomer } from './customer';
import { FiftyPercentDiscount } from './discout';
import { Messaging } from './message';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';
// import { MessagingProtocol } from './interfaces/messaging-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppcart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa gigante',
  '11111111',
);
// const individualCustomer = new IndividualCustomer(
//   'Leonardo',
//   'Henrique',
//   '111.1111.111-11',
// );

// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('A mensagem foi enviada pelo MOCK');
//   }
// }

// const messagingMock = new MessagingMock();

const order = new Order(shoppcart, messaging, persistency, enterpriseCustomer);

shoppcart.addItem(new Product('Camiseta', 10));
shoppcart.addItem(new Product('Caderno', 5.54));

console.log(shoppcart);
console.log(shoppcart.total());
console.log(shoppcart.totalWidthDicount());
order.checkout();
console.log(order.orderStatus);
