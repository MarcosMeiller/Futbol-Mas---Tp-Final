
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class  SearchComponent {
  query: string = '';

  constructor(private router: Router) {}

  search() {
    if (this.query) {
      this.router.navigate(['/resultados'], { queryParams: { q: this.query } });
    }
  }
}

