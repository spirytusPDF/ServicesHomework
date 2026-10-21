import { Service, inject, signal, WritableSignal } from '@angular/core';
import { Movie } from '../models/Movie';
import { HttpClient } from '@angular/common/http';

@Service()
export class MovieService {
    private apiKey = '1c7bd92f'; 
    private apiUrl = 'https://www.omdbapi.com/';
    private http = inject(HttpClient);

    movie: WritableSignal<Movie | null> = signal<Movie | null>(null);
    errorMessage: WritableSignal<string> = signal<string>('');

    
    public searchMovie(title: string, year?: string, plotType: 'short' | 'full' = 'short'): void {
    if (!title.trim()) return;

    let url = `${this.apiUrl}?apikey=${this.apiKey}&t=${encodeURIComponent(title)}&plot=${plotType}`;
    
    if (year && year.trim()) {
      url += `&y=${year.trim()}`;
    }

    this.http.get<Movie>(url).subscribe({
      next: (data) => {
        if (data.Response === 'True') {
          this.movie.set(data);
          this.errorMessage.set('');
        } else {
          this.movie.set(null);
          this.errorMessage.set(data.Error || 'Movie not found');
        }
      },
      error: () => {
        this.movie.set(null);
        this.errorMessage.set('Error fetching data from API');
      }
    });
  }
  
}



