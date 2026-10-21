import { Component, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  imports: [],
  selector: 'app-movie-card',
  styleUrl: './movie-card.css',
  templateUrl: './movie-card.html',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
}
