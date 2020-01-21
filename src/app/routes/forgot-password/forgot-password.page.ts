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
    scode = "0";

    codeIsRight = true;
    pwdIsSame = true;
    constructor(private authenticationCodeService: AuthentiactionCodeService, private router: Router,
                private userService: UserService, private toastController: ToastController,
                private alertController: AlertController, private menuController: MenuController,
                public alertCtrl : AlertController) { }
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
          this.scode = this.authenticationCodeService.createCode(4);
          let alert = await this.alertCtrl.create({
            header : '验证码',
            message: '您的验证码是' + this.scode,
            buttons: ['确认']
        });
        alert.present();
          this.next();
      } else {
          let toast = await this.toastController.create({
              message: '不存在这个手机用户！',
              duration: 3000
          });
          toast.present();
      }
    }
    onSendCode() {
      if (this.scode == this.user.code) {
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
                  header: '提示',
                  message: '密码修改成功！',
                  buttons: ['确认']
              });
              alert.present();
              this.router.navigateByUrl('login');
          }
      } else {
          this.pwdIsSame = false;
      }
    }
}
