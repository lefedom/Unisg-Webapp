import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  @Input() chatMessage: string;

  constructor() { }

  ngOnInit() {
  }

  public addMessage(message: string): void {
        
    alert(message);

    this.chatMessage = '';
    
  }
}