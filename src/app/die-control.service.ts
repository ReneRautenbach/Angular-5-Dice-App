import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { of } from 'rxjs/observable/of';
import { Die } from './die-control/die-control.model';
import { Subject } from 'rxjs/Subject';
import { CURRENCIES } from '@angular/common/src/i18n/currencies';

@Injectable()
export class DieControlService {
 
  private total:number = 5;
  private dice: Die[]; 

   //SUBJECT IS LIKE AN OBSERVABLE, BUT IT CAN FIRE EVENTS FOR OBSERVABLE
   private totalSource = new Subject<any>();

  constructor() { 
    this.dice = []; 
    this.total = 0;
  }  

  // returns an observable array of die
  getDice() : Observable<Die[]> {
    return of(this.dice);
  }
 
  // returns an observable total value
  getTotal(): Observable<number> {
    return this.totalSource.asObservable();
  }

  addDie() { 
    let die = new Die();  
    this.dice.push( die );
    this.addTotal(die.getValue());
  }
  
  reset() { 
    this.total = 0;
    this.dice = [];
     this.totalSource.next(this.total);
  }

  public reroll(index) {
    let die = this.dice[index];
    let currentValue = die.getValue();
    die.reroll();
    let newValue = die.getValue();
 
    this.addTotal(newValue-currentValue);
  } 

  public reRollAll() {
    this.initTotal();
    this.dice.forEach( die => { 
      die.reroll();
      this.addTotal(die.getValue());
    });
     
  } 

  private initTotal(){
    this.total = 0;
    this.totalSource.next(this.total);
  }

  private addTotal(value: number) {
    this.total = value + this.total;
    this.totalSource.next(this.total); 
  }
}
