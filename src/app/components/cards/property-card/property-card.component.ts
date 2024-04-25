import { Component, Input } from '@angular/core';
import { IProperty } from '../../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './property-card.component.html',
})
export class PropertyCardComponent {
  @Input() item!: IProperty;
}
