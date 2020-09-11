import { Component, Inject } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = null;

  parentMessage = "Message from parent component";
  messageFromChild = null;

  constructor(@Inject(TestService) testService) {
    console.log(testService);
    this.title = 'Angular Application';
  }

  ShowMessage(message: string) {
    this.messageFromChild = message;
  }

}
