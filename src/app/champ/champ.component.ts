import { Component, OnInit, Input} from '@angular/core';
import { ChampionService } from '../champion-service';

@Component({
  selector: 'app-champ',
  templateUrl: './champ.component.html',
  styleUrls: ['./champ.component.css']
})
export class ChampComponent implements OnInit {

  opened = false;
  @Input() props;
  champions = {};
  selectedChamp = {};
  showX = false;

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.champions = Object.values(this.championService.champions);
  }

  toggleX(){
    this.showX = !this.showX;
  }

  openChampbox(){
    if(!this.selectedChamp['image']){
      this.opened = true;
    }
  }

  closeChampbox(){
    //Need this for some reason.. binding wont update without it
    setTimeout(() => {
      this.opened = false;
    }, 0)
  }

  champSelected(selectedChamp){
    this.selectedChamp = selectedChamp || {};
    this.opened = false;

    if(this.props.side){
      if(this.props.side === 'blue'){
        this.championService.blueChamps[this.props.position] = selectedChamp;
      }
      else{
        this.championService.redChamps[this.props.position] = selectedChamp;
      }
    }
  }

  swapChamp(){
    this.selectedChamp = false;
    this.showX = false;
  }
}
