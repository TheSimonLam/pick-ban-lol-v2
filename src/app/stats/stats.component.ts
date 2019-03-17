import { Component, OnInit, Input } from '@angular/core';
import {ChampionService} from '../champion-service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  champs;
  @Input() side;
  hp = 0;
  hpAt18 = 0;
  moveSpeed = 0;
  armour = 0;
  armourAt18 = 0;
  spellBlock = 0;
  spellBlockAt18 = 0;
  hpRegen = 0;
  hpRegenAt18 = 0;
  attackRange = 0;
  crit = 0;
  critAt18 = 0;
  ad = 0;
  adAt18 = 0;
  attackSpeed = 0;
  attackSpeedAt18 = 0;

  constructor(private championService: ChampionService) { }

  ngOnInit() {
  }

  refresh(){
    this.resetValues();

    if(this.side === 'blue'){
      this.champs = Object.values(this.championService.getBlueChamps());
    }
    else{
      this.champs = Object.values(this.championService.getRedChamps());
    }

    for (let champ of this.champs) {
      this.hp += champ.stats.hp;
      this.hpAt18 += champ.stats.hp + (champ.stats.hpperlevel * 17);
      this.moveSpeed += champ.stats.movespeed;
      this.armour += champ.stats.armor;
      this.armourAt18 += champ.stats.armorperlevel + (champ.stats.armorperlevel * 17);
      this.spellBlock += champ.stats.spellblock;
      this.spellBlockAt18 += champ.stats.spellblock + (champ.stats.spellblock * 17);
      this.hpRegen += champ.stats.hpregen;
      this.hpRegenAt18 += champ.stats.hpregen + (champ.stats.hpregen * 17);
      this.attackRange += champ.stats.attackrange;
      this.ad += champ.stats.attackdamage;
      this.adAt18 += champ.stats.attackdamage + (champ.stats.attackdamageperlevel * 17);
      this.attackSpeed += champ.stats.attackspeed;
      this.attackSpeedAt18 += champ.stats.attackspeed + (champ.stats.attackspeedperlevel * 17);
    }

    this.hp = Math.round(this.hp);
    this.hpAt18 = Math.round(this.hpAt18);
    this.moveSpeed = Math.round(this.moveSpeed);
    this.armour = Math.round(this.armour);
    this.armourAt18 = Math.round(this.armourAt18);
    this.spellBlock = Math.round(this.spellBlock);
    this.spellBlockAt18 = Math.round(this.spellBlockAt18);
    this.hpRegen = Math.round(this.hpRegen);
    this.hpRegenAt18 = Math.round(this.hpRegenAt18);
    this.attackRange = Math.round(this.attackRange);
    this.ad = Math.round(this.ad);
    this.adAt18 = Math.round(this.adAt18);
    this.attackSpeed = Math.round(this.attackSpeed);
    this.attackSpeedAt18 = Math.round(this.attackSpeedAt18);
  }

  resetValues(){
    this.hp = 0;
    this.hpAt18 = 0;
    this.moveSpeed = 0;
    this.armour = 0;
    this.armourAt18 = 0;
    this.spellBlock = 0;
    this.spellBlockAt18 = 0;
    this.hpRegen = 0;
    this.hpRegenAt18 = 0;
    this.attackRange = 0;
    this.ad = 0;
    this.adAt18 = 0;
    this.attackSpeed = 0;
    this.attackSpeedAt18 = 0;
  }
}
