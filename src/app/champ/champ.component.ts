import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
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
  @ViewChild("search") searchInput: ElementRef;

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
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
        this.repositionBox();
      }, 0);
    }
  }

  closeChampbox(){
    this.opened = false;
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

  repositionBox(){
    let documentWidth = document.body.offsetWidth,
      boxElement = document.getElementsByClassName("champ-select-container")[0],
      boxElementBoundingClientRect = boxElement.getBoundingClientRect(),
      boxElementRightPos = boxElementBoundingClientRect.right;

    if(boxElementRightPos > documentWidth){
      boxElement['style'].right = "0px";
    }
  }

  filterItem(filterString){
    if(!filterString){
      this.champions = Object.values(this.championService.champions);
    }
    this.champions = Object.assign([], this.champions).filter(
      champ => champ.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1
    )
  }
}
