import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearch } from '../components/movie-search/movie-search';

@Component({
  imports: [RouterOutlet, MovieSearch],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
