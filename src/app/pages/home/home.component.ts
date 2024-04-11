import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/common/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
