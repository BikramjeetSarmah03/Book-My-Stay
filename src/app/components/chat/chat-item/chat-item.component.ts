import { Component, Input } from '@angular/core';
import { IChatItem } from '../chatlist/chatlist.component';

@Component({
  selector: 'app-chat-item',
  standalone: true,
  imports: [],
  templateUrl: './chat-item.component.html',
  styleUrl: './chat-item.component.css',
})
export class ChatItemComponent {
  @Input() item!: IChatItem;
}
