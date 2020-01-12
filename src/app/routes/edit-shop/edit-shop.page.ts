import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.page.html',
  styleUrls: ['./edit-shop.page.scss'],
})
export class EditShopPage implements OnInit {
    title: string;
    property: string;
    value: string; // 用于ngModel，从shop对象的相关属性中获取数据
    shop: any; // 用于保存从本地存储中获得店铺数据
    constructor(private activatedRoute: ActivatedRoute, private localStorageService: LocalStorageService,
                private router: Router, 
                //private statusBar: StatusBar
                ) {
        activatedRoute.queryParams.subscribe(queryParams => {
            this.property = queryParams.property;
            this.title = queryParams.title;
        });
        //this.statusBar.overlaysWebView(true);
    }
    ngOnInit() {
    }
    save() {
        this.shop = this.localStorageService.get('currentUser', null);
        this.shop[this.property] = this.value;
        this.localStorageService.set('currentUser', this.shop);
        this.value = '';
        this.router.navigateByUrl('shop');
    }

    Back(){
        this.router.navigateByUrl('shopsetting');
    }
}
