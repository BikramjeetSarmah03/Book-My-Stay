import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  tabTypes = ['buy', 'rent'];

  query = {
    type: 'buy',
    location: '',
    minPrice: '',
    maxPrice: '',
  };

  switchType(val: string) {
    this.query.type = val;
  }
}
