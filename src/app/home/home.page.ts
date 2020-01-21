import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    sales = [
        {'title': '今日', 'content': '比昨日', 'current': 10.30, 'previous': 12.03},
        {'title': '七日', 'content': '比同期', 'current': 30.00, 'previous': 24.54},
        {'title': '本月', 'content': '比同期', 'current': -5.46, 'previous': -1.25}
    ];
    quicks = [
        [
            {'href': '/addProduct', 'name': 'add_salse', 'text': '新增商品', 'disable': false},
            {'href': '/home', 'name': 'add_user', 'text': '新增会员', 'disable': false},
            {'href': '/home', 'name': 'sales_account', 'text': '收银记账', 'disable': false},
            {'href': '/home', 'name': 'a_note', 'text': '支出管理', 'disable': false}
        ],
        [
            {'href': '/productList', 'name': 'sales_management', 'text': '商品管理', 'disable': false},
            {'href': '/home', 'name': 'user_management', 'text': '会员管理', 'disable': false},
            {'href': '/home', 'name': 'shop_management', 'text': '查询销售', 'disable': false},
            {'href': '/home', 'name': 'analysis', 'text': '智能分析', 'disable': false}
        ],
        [
            {'href': '/supplierList', 'name': 'gongying_more', 'text': '供应商管理', 'disable': false},
            {'href': '/home', 'name': 'guandan_more', 'text': '挂单', 'disable': false},
            {'href': '/home', 'name': 'image_addsales', 'text': '高级功能', 'disable': false},
            {'disable': true}
        ]
    ];
    constructor(private router: Router, private localStorageService: LocalStorageService) { }
    ionViewWillEnter() {
        let login = this.localStorageService.get('currentUser', null);
        if (login == null) {
            this.router.navigateByUrl('currentUser');
        }
    }
  
  minus(current: number, previous: number): number {
    const result = current - previous;
    if (result > 0) {
      return 1;
    } else if (result === 0) {
      return 0;
    } else {
      return -1;
    }
  }

  AddSales(){
      console.log('turn to /category-list');
      this.router.navigateByUrl('/category-list');
  }
}

//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭