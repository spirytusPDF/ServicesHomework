import { computed, inject, Service, signal, WritableSignal } from '@angular/core';
import { Product } from '../models/Product';

@Service()
export class CartManagement {
    products: WritableSignal<Product[]> = signal<Product[]>([
        {Id:1, Name:"Mascara", Description:"Long-lasting, volume effect", Price:2.99, Quantity:2},
        {Id:2, Name:"Plush Toy", Description:"Soft, a good gift for a kid", Price:4.99, Quantity:1},
        {Id:3, Name:"Mouse Pad", Description:"With a kitten, 30x30cm", Price:4.50, Quantity:1},
        
    ]);
    totalPrice = computed(()=>
        {return  this.products().reduce(
            (total, item)=>{
            return total + (item.Price * item.Quantity);
            }
        ,0).toFixed(2);
        }
    );
    shopProducts: WritableSignal<Product[]> = signal<Product[]>([]);

    public addNewProduct(newProduct:Product){
        const currentProducts = this.products();
        let newId = Math.max(...currentProducts.map(p=>p.Id))+1;
        this.products.update(products=>[...products, {Id:newId, Name:newProduct.Name,Description:newProduct.Description,Price:newProduct.Price,Quantity:newProduct.Quantity}])
        this.shopProducts.update(products=>products.filter(p=>p.Id!=newProduct.Id));
    }

    public deleteProduct(newProduct: Product){
        if(newProduct.Id>0)
        this.products.update(products=>products.filter(p=>p.Id!=newProduct.Id));
        this.shopProducts.update(products=>[...products, {Id:newProduct.Id, Name:newProduct.Name,Description:newProduct.Description,Price:newProduct.Price,Quantity:newProduct.Quantity}])
    }

    public clearCart(){
        const currentCartItems = this.products();
        this.shopProducts.update(shopItems => [...shopItems, ...currentCartItems]);
        this.products.update(products=>products =[]);
    }

    public changeProductAmount(product:Product, newQuantity:number){
        if(product.Id>0 && newQuantity>0){
            this.products.update(
                products=>products.map(p=>p.Id==product.Id ? {...p, Quantity:newQuantity}:p)
            );
        }
    }

    
}
