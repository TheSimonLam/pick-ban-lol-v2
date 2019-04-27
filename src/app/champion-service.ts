import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ChampionService {

  private championsDataUrl: string = "http://ddragon.leagueoflegends.com/cdn/9.8.1/data/en_US/champion.json";
  champions;
  redChamps = {
    top: {}, jungle: {}, mid: {}, adc: {}, support: {},
  };
  blueChamps = {
    top: {}, jungle: {}, mid: {}, adc: {}, support: {},
  };

  constructor(
    private http: HttpClient) { }

  getChampions () {
    return this.http.get(this.championsDataUrl)
      .pipe(
        tap(_ => this.log('fetched champions')),
        catchError(this.handleError('getChampions', {}))
      );
  }

  setChampions (res) {
    this.champions = res.data;
  }

  getBlueChamps(){
    return this.blueChamps;
  }

  getRedChamps(){
    return this.redChamps;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // console.log(`ChampionService: ${message}`);
  }
}
