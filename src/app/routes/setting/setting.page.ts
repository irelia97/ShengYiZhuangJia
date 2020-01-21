import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
    version: '';
    constructor(private localStorageService: LocalStorageService, private router: Router, 
        private alertController: AlertController) { }
    ionViewWillEnter() {
        let appConfig: any = this.localStorageService.get('App', {
            hasRun: false,
            version: '1.1.1'
        });
        this.version = appConfig.version;
    }
    ngOnInit() {
    }
    onLogout() {
      this.localStorageService.remove('login');
      this.router.navigateByUrl('login');
    }
    async checkUpdate() {
        let alert =await this.alertController.create({
            header: '提示',
            message: '已经是最新版本',
            buttons: ['确认']
        });
        alert.present();
    }
}
