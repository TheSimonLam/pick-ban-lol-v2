import { Component, OnInit, Input} from '@angular/core';
import { ChampionService } from '../champion-service';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {

  opened: boolean = false;
  @Input() props;
  champions = {};
  selectedChamp = {};
  showX = false;

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.champions = Object.values(this.championService.champions);
    console.log(this.champions);
  }

  toggleX(){
    this.showX = !this.showX;
  }

  iconClicked(){
    if(!this.selectedChamp.image){
      this.opened = true;
    }
  }

  champSelected(selectedChamp){
    this.selectedChamp = selectedChamp;
    this.opened = false;

    if(this.props.side){
      //TODO: If this.props.lockedIn, then fire to service along with this.props.side to track champion stats
      console.log(this.props);
    }
    else{
      console.log(this.props);
    }
  }

  swapChamp(){
    this.selectedChamp = false;
    this.showX = false;
  }
}
