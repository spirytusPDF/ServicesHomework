import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  imports: [MovieCard],
  selector: 'app-movie-search',
  styleUrl: './movie-search.css',
  templateUrl: './movie-search.html',
})
export class MovieSearch {
  movieTitle = '';
  movieYear = '';
  plotPlotType: 'short' | 'full' = 'short';

  movieService = inject(MovieService);

  onSearch(): void {
    this.movieService.searchMovie(this.movieTitle, this.movieYear, this.plotPlotType);
  }
}
