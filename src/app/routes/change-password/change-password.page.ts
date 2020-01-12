import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
    pwd = {
        old: '',
        new: '',
        cNew: ''
      };
      oldIsRight = true;
      samePwd = true;
      constructor(private localStorageService: LocalStorageService, private userService: UserService,
                  private router: Router, private alertController: AlertController) { }
    
      ngOnInit() {
      }
      async onChangePwd() {
        let login = this.localStorageService.get('currentUser', null);
        if (login.accounts.passwordToken == this.pwd.old) {
            if( this.pwd.new == this.pwd.cNew ){
                this.userService.update(login.phone, this.pwd.new);
                login.accounts.passwordToken = this.pwd.new;
                this.localStorageService.set('currentUser', login);
                this.router.navigateByUrl('setting');
                  let alert =await this.alertController.create({
                      header: 'Tips',
                      message: 'Password change successful',
                      buttons: ['Confirm']
                  });
                  alert.present();
            }else{
                this.samePwd = false;
            }
        } else {
            this.oldIsRight = false;
        }
      }
}
