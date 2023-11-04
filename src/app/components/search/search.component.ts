import { Component } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private footballApiService: FootballApiService) {}

  search() {
    if (this.searchTerm.trim() === '') {
      this.searchResults = [];
      return;
    }

    this.footballApiService.search(this.searchTerm).subscribe((data: any[]) => {
      this.searchResults = data;
    });
  }
}
