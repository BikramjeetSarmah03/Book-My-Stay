import { Component } from '@angular/core';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { ChatItemComponent } from '../chat-item/chat-item.component';

@Component({
  selector: 'app-chatlist',
  standalone: true,
  imports: [ChatItemComponent, ChatboxComponent],
  templateUrl: './chatlist.component.html',
  styleUrl: './chatlist.component.css',
})
export class ChatlistComponent {
  chatList = chatList;

  openChatbox = false;
}

export const chatList = [
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    msg: 'lorem ipsum dolor sit amet...',
  },
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    msg: 'lorem ipsum dolor sit amet...',
  },
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    msg: 'lorem ipsum dolor sit amet...',
  },
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    msg: 'lorem ipsum dolor sit amet...',
  },
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    msg: 'lorem ipsum dolor sit amet...',
  },
  {
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'John Doe',
    msg: 'lorem ipsum dolor sit amet...',
  },
];
