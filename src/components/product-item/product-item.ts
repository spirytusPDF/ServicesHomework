import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartManagement } from '../../services/cart-management';

@Component({
  imports: [],
  selector: 'app-product-item',
  styleUrl: './product-item.css',
  templateUrl: './product-item.html',
})
export class ProductItem {
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) inCart: boolean | undefined;
  
  cartManager = inject(CartManagement);

  isInCart = false;

  ngOnInit() {
    this.isInCart = this.inCart ?? false;
  }

  addToCart(){
    if(this.isInCart == false){
      this.isInCart = true;
      this.cartManager.addNewProduct(this.product);
    }
  }
  
  removeFromCart(){
    if(this.isInCart == true){
      this.isInCart = false;
      this.cartManager.deleteProduct(this.product);
    }
  }

  onQuantityInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newQty = parseInt(input.value, 10);
    
    if (!isNaN(newQty) && newQty > 0) {
      this.cartManager.changeProductAmount(this.product, newQty);
    }
  }

  
}
