import { Component, EventEmitter, Output } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css',
})
export class ChatboxComponent {
  @Output() openStateChanged = new EventEmitter<boolean>();

  messages = Messages;

  toggleChatbox() {
    // Toggle the chat box state
    this.openStateChanged.emit(false);
  }
}

const Messages = [
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: true,
  },
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: false,
  },
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: false,
  },
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: false,
  },
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: true,
  },
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: false,
  },
  {
    msg: 'lorem ipsum 123',
    time: '1 hour ago',
    own: false,
  },
];
