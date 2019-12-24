import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.appPages = [
        { title: 'Forum', url: '/home', icon: 'chatboxes' },
        { title: 'Tel Box', url: '/home', icon: 'create' },
        { title: 'Invite', url: '/home', icon: 'git-merge' },
        { title: 'Cash account', url: '/home', icon: 'cash' },
        { title: 'FeedBack', url: '/home', icon: 'cash' },
        { title: 'Help', url: '/home', icon: 'cash' },
      ];
  }
}
