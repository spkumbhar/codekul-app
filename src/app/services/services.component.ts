import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
 // providers: [MessagingService]  // providing service


})
export class ServicesComponent implements OnInit {
// injecting service
  constructor(
    private messageSv: MessagingService
  ) { }

  ngOnInit() {
  }

}
