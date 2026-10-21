import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/Product';
import { CartManagement } from '../../services/cart-management';
import { ProductItem } from '../product-item/product-item';

@Component({
  imports: [ProductItem],
  selector: 'app-shop-prototype',
  styleUrl: './shop-prototype.css',
  templateUrl: './shop-prototype.html',
})
export class ShopPrototype {
  
  cartManager = inject(CartManagement);
  cartProducts = this.cartManager.products;

  

}
