import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-shopsetting',
  templateUrl: './shopsetting.page.html',
  styleUrls: ['./shopsetting.page.scss'],
})
export class ShopsettingPage implements OnInit {
    shop = {
        shopName: '',
        shortName: '',
        registerDate: '',
        phone: '',
        email: '',
        owner: '',
        shopPhone: '',
        businessType: ''
      };
      constructor(private localStorageService: LocalStorageService) { }
    
      ngOnInit() {
      }
      ionViewWillEnter() {
          let login = this.localStorageService.get('currentUser', null);
          if (login != null) {
            this.shop.shopName = login.shopName;
            this.shop.registerDate = login.registerDate;
            this.shop.phone = login.phone;
            this.shop.email = login.email;
            this.shop.shortName = login.shortName;
            this.shop.shopPhone = login.shopPhone;
            this.shop.owner = login.owner;
            this.shop.businessType = login.businessType;
          }
          console.log('loginInfo = ' + login);
      }
}
