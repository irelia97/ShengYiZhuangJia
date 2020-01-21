import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalStorageService } from './shared/services/local-storage.service';

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
    private localStorageService: LocalStorageService,
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
        { title: '资金账户', url: '/home', icon: 'chatboxes' },
        { title: '手机橱窗', url: '/home', icon: 'create' },
        { title: '邀请有礼', url: '/home', icon: 'git-merge' },
        { title: '开店论坛', url: '/home', icon: 'cash' },
        { title: '反馈建议', url: '/home', icon: 'cash' },
        { title: '帮助中心', url: '/home', icon: 'cash' },
      ];
    }
    nullUser = {
        shopName: '未登录店铺名',
        phone: '未登录手机',
        email: '未登录邮箱',
        accounts: {phone: '未定义', passwordToken: '未定义'},
        registerDate: new Date().toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''),
        shortName: '',
        owner: '',
        shopPhone: '',
        businessType: ''
    };

  currentUser = this.localStorageService.get('currentUser', this.nullUser);
  userInfo : any = {
    name : this.currentUser.shopName,
    tel  : this.currentUser.phone,
    email: this.currentUser.email
  };
}
