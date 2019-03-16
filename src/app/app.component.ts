import { Component } from '@angular/core';
import { ChampionService } from '../app/champion-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  champsReady:boolean = false;
  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.getChamps();
  }

  getChamps(): void {
    this.championService.getChampions()
      .subscribe(champs => {this.championService.setChampions(champs); this.champsReady = true;});
  }
}
