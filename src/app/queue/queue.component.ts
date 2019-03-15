import {Component, Input, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  @Input() type: string;
  @Input('size') size: number;

  constructor() { }

  ngOnInit() {
  }

}
