import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopPrototype } from '../components/shop-prototype/shop-prototype';

@Component({
  imports: [RouterOutlet, ShopPrototype],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
