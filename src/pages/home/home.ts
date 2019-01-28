import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FamilytreePage } from '../familytree/familytree';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    familytreepage=FamilytreePage;


 
  constructor( public navCtrl: NavController) {

  
  }


  


}
