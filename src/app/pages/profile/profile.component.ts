import { Component } from '@angular/core';
import { listData } from '../properties/properties.component';
import { PropertyCardComponent } from '../../components/cards/property-card/property-card.component';
import { ChatlistComponent } from '../../components/chat/chatlist/chatlist.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PropertyCardComponent, ChatlistComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  listData = listData;
}
