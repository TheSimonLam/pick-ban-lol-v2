import { Component, OnInit, Input} from '@angular/core';
import { ChampionService } from '../champion-service';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {

  hovered: boolean = false;
  @Input() props;
  champions = {};

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    console.log(this.championService.champions);
  }

  onClick():void {
    if(this.props.side){
      //TODO: If this.props.lockedIn, then fire to service along with this.props.side to track champion stats
      console.log(this.props);
    }
    else{
      console.log(this.props);
    }
  }

  toggleHover(){
    this.hovered = !this.hovered;
  }
}
