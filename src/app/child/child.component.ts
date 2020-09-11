import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() message: string;
@Output() childOutputEvent= new EventEmitter();
messageFromChild = "Message from Child Component";

  constructor() { }

  ngOnInit(): void {
    this.childOutputEvent.emit(this.messageFromChild);
  }

}
