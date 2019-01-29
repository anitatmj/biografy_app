import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { FamilytreePage } from '../pages/familytree/familytree';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

goToFamilytreePage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FamilytreePage);
  }
}
