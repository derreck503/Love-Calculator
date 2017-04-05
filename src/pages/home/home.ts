import { Component } from '@angular/core';
//Necesaary to use navController at the bottom
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//Declare ngModels in this class to be used in the home.html page
  name1 = '';
  name2 = '';
  //Manually hardcore a score
  //score = 42;

  //declare functions in home.ts always
  get score(){
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    //Have to use let instead of in int foor loops with typescript
    for(let i = 0; i < letters.length; i++)
    {
      sum += letters.charCodeAt(i);
    }
    //using modulus we can only get a value 0-100
    return sum%101;
  }

//Used for navigating multiple pages
  constructor(public navCtrl: NavController) {
    
  }

}
