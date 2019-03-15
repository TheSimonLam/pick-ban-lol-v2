import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionServiceService {

  private championsDataUrl: string = "http://ddragon.leagueoflegends.com/cdn/9.5.1/data/en_US/champion.json";

  constructor() { }
}
