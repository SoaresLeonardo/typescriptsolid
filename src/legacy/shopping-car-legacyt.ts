type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items.reduce((total, item) => total + item.price, 0).toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shoppcart = new ShoppingCartLegacy();
shoppcart.addItem({ name: 'Camiseta', price: 10 });
shoppcart.addItem({ name: 'Caderno', price: 5.54 });
shoppcart.addItem({ name: 'Refrigerante', price: 4.9 });

console.log(shoppcart);
console.log(shoppcart.total());
shoppcart.checkout();
console.log(shoppcart.orderStatus);
