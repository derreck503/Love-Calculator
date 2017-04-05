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

//Used for navigating multiple pages
  constructor(public navCtrl: NavController) {
    
  }

}
