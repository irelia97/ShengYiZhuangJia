import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import { AjaxResult } from '../ajax-result';
import { Register } from 'src/app/routes/passport/register';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private localStorageService: LocalStorageService, private alertController: AlertController,
                private router: Router) { }

    // 实现注册方法
    async signup_lyy(register: Register) {
        // return
        const user = {
            shopName: register.shopName,
            phone: register.phone,
            email: register.email,
            accounts: {phone: register.phone, passwordToken: register.password},
            registerDate: new Date().toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''),
            shortName: '',
            owner: '',
            shopPhone: '',
            businessType: ''
        };
        let u = this.localStorageService.get('user', []);
        u.push(user);
        this.localStorageService.set('user', u);
    }

    async signup(register: Register): Promise<AjaxResult> {
        return new Promise(((resolve, reject) => {
            // resolve();
        }));
    }

// 实现登录方法
    async login(username: string, password: string) {
        let isUser = this.localStorageService.get('user', null);
        console.log(isUser);
        console.log(username);
        console.log(password);

        // 登录错误提示
        if ( isUser === 'null') {
            console.log('No user yet!');
        }
        let noUser = true;
        for(let u of isUser){
            console.log('user.phone = ' + u.phone);
            console.log('user.email = ' + u.email);
            console.log(u.phone == username);
            console.log(u.email == username);  
            if (u.phone == username || u.email == username) {
                console.log('if phone === username');
                noUser = false;
                if (u.accounts.passwordToken == password) {
                    console.log('password == ');
                    this.router.navigateByUrl('\home');
                    this.localStorageService.set('currentUser', u);
                    break;
                } else {
                    console.log('Error password');
                    const alert = await this.alertController.create({
                        header: 'Tips',
                        // subHeader: 'sfd',
                        message: 'Password is error!',
                        buttons: ['Confirm']
                    });
                    alert.present();
                }
            }else{
                console.log('Not this user!');
            }
        }
        if( noUser ){
            console.log('No this user!');
            const alert = await this.alertController.create({
                header: 'Tips',
                // subHeader: 'sfd',
                message: 'No this user!',
                buttons: ['Confirm']
            });
            alert.present();
        }
    }

    // 修改密码
    update(phone: string, password: string): boolean {
        let user = this.localStorageService.get('user', null);
        if ( user != null ) {
            for (let u of user) {
                if (u.phone == phone) {
                    u.accounts.passwordToken = password;
                    break;
                }
            }
            this.localStorageService.set('user', user);
            return true;
        }
        return false;
    }
    // 判断手机号是否已经存在
    check(phone: string): boolean {
        let user = this.localStorageService.get('user', null);
        if (user != null) {
            for (let u of user) {
                if (u.phone == phone) {
                    return true;
                }
            }
        }
        return false;
    }
}
