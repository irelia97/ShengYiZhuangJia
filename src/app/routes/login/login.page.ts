import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // 视图模型的属性账号，双向绑定
  password: string = ''; // 视图模型的属性密码，双向绑定

  constructor(private toastController: ToastController, private userService: UserService, 
    private alertController: AlertController, private router: Router) { 
      
  }

  ngOnInit() {
  }

  async onLogin(form: NgForm) {
    console.log('onLogin()');
    //console.log(form);

    if (this.username === '') {
        const toast = await this.toastController.create({
            message: '请输入您的手机号或邮箱',
            duration: 3000
        });
        toast.present();
    }else if (this.password === '') {
        const toast = await this.toastController.create({
            message: '请输入密码',
            duration: 3000
        });
        toast.present();
    }
    //  调用真正的登录方法
    this.userService.login(this.username, this.password);
  }

  openForgotPassword() {
    this.router.navigateByUrl('forgot-password');
  }
}
