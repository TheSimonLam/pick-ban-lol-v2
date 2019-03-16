import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  @Input() props;
  boxes;

  constructor() { }

  ngOnInit() {
    if(this.props.lockedIn){
      this.boxes = [{position: 'top', side: this.props.side}, {position: 'jungle', side: this.props.side}, {position: 'mid', side: this.props.side}, {position: 'adc', side: this.props.side}, {position: 'support', side: this.props.side}];
    }
    else{
      this.boxes = Array(this.props.size).fill(0).map((x,i)=>i);
    }
  }

}
