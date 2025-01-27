import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, AlertController } from '@ionic/angular';
import { AuthentiactionCodeService } from 'src/app/shared/services/authentiaction-code.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signup = {
    phone: '',
    email: '',
    shopName: '',
    password: '',
    confirmPassword: '',
    code: ''
  };

  submited = false;

  slideIndex = 0;
  // 依赖注入
  @ViewChild('signupSlides', {static: false}) signupSlides: IonSlides;
  constructor(private authenticationCodeService: AuthentiactionCodeService, private userService: UserService, 
    private router: Router, public alertCtrl : AlertController) { }
  // tslint:disable-next-line:member-ordering
  randomCode = null;
  verifyCode: any = {
    verifyCodeTips: '获取验证码',
    countdown: 60,
    disable: true
   };
  // 字符串'signupSlides'和模板中的#signupSlides引用变量的名称一致
  ngOnInit() {
  // this.signupSlides.lockSwipeNext(true);
  }
 onNext() {
   this.slideIndex += 1;
   this.signupSlides.slideNext();
  }
 onPrevious() {
   this.slideIndex -= 1;
   this.signupSlides.slidePrev();
  }
  onSignupPhone(form: NgForm) {
    this.submited = true;
    if (form.valid) {
      // 已通过客户端验证
      console.log(this.submited);
      // this.onNext();
    }
  }
  async onSendSMS() {
    this.randomCode = this.authenticationCodeService.createCode(4);
    let alert = await this.alertCtrl.create({
        header : '验证码',
        message: '您的验证码是' + this.randomCode,
        buttons: ['确认']
    });
    alert.present();

    console.log('随机生成4位随机数:' + this.randomCode);
    // 点击按钮后开始倒计时
    this.verifyCode.disable = false;
    this.settime();
  }
  settime() {
    // tslint:disable-next-line:triple-equals
    if (this.verifyCode.countdown == 1) {
     this.verifyCode.countdown = 60;
     this.verifyCode.verifyCodeTips = '获取验证码';
     this.verifyCode.disable = true;
     return;
    } else {
     this.verifyCode.countdown--;
    }
    this.verifyCode.verifyCodeTips = '重新获取' + this.verifyCode.countdown + '秒';
    setTimeout(() => {
     this.verifyCode.verifyCodeTips = '重新获取' + this.verifyCode.countdown + '秒';
     this.settime();
    }, 1000);
   }
  async onValidateCode(form: NgForm) {
    if (form.valid) {
      // 已通过客户端验证
      const inputCode = this.signup.code;
      // tslint:disable-next-line:triple-equals
      if (inputCode == this.randomCode) {
        console.log('验证通过');
        let alert = await this.alertCtrl.create({
            header : '验证码通过',
            message: '您的验证码正确！',
            buttons: ['确认']
          });
          alert.present();
      } else {
        console.log('验证码不正确');
        let alert = await this.alertCtrl.create({
            header : '验证码错误',
            message: '您的验证码错误！',
            buttons: ['确认']
        });
        alert.present();
      }

      
      // this.onNext();
    }
  }
  onSignupInformation(form: NgForm) {
    if (this.signup.password === this.signup.confirmPassword) {
        // 注册成功，保存数据
        this.userService.signup_lyy(this.signup);
        this.onNext();
    } else {
        //this.pwdIsSame = false;
    }
   }

   gotoLogin(){
        this.router.navigateByUrl('\login');
   }
}
