import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentiactionCodeService } from 'src/app/shared/services/authentiaction-code.service';
import { UserService } from 'src/app/shared/services/user-service.service';
import { ToastController, MenuController, AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
    @ViewChild('forgotPasswordSlides', {static: false}) forgotPasswordSlides: IonSlides;
    user = {
      forgotPhone: '',
      code: '',
      pwd: '',
      cpwd: ''
    };
    codeIsRight = true;
    pwdIsSame = true;
    constructor(private authenticationCodeService: AuthentiactionCodeService, private router: Router,
                private userService: UserService, private toastController: ToastController,
                private alertController: AlertController, private menuController: MenuController) { }
    ngOnInit() {
        //this.forgotPasswordSlides.lockSwipeToNext(true);
    }
    ionViewDidEnter() {
        this.menuController.enable(false);
    }
    ionViewDidLeave() {
        this.menuController.enable(true)
    }
    next() {
        this.forgotPasswordSlides.lockSwipeToNext(false);
        this.forgotPasswordSlides.slideNext();
        this.forgotPasswordSlides.lockSwipeToNext(true);
    }
    previous() {
        this.forgotPasswordSlides.lockSwipeToNext(false);
        this.forgotPasswordSlides.slidePrev();
        this.forgotPasswordSlides.lockSwipeToNext(true);
    }
    async onSendPhone() {
      if (this.userService.check(this.user.forgotPhone)) {
          this.authenticationCodeService.createCode(4);
          this.next();
      } else {
          let toast = await this.toastController.create({
              message: 'Tel not register!',
              duration: 3000
          });
          toast.present();
      }
    }
    onSendCode() {
      if (this.authenticationCodeService.validate(this.user.code)) {
        this.next();
      } else {
        // 验证码错误
        this.codeIsRight = false;
      }
    }
    async onSendPwd() {
      if (this.user.pwd === this.user.cpwd) {
          // 注册成功，保存数据
          if (this.userService.update(this.user.forgotPhone, this.user.pwd)) {
              let alert =await this.alertController.create({
                  header: 'Tips',
                  message: 'PassWord modify successful!',
                  buttons: ['Confirm']
              });
              alert.present();
              this.router.navigateByUrl('login');
          }
      } else {
          this.pwdIsSame = false;
      }
    }
}
