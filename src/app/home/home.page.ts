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
        {'title': 'Today', 'content': 'With Yesterday', 'current': 10.00, 'previous': 20.00},
        {'title': 'Week', 'content': 'With SameTime', 'current': 20.00, 'previous': 30.00},
        {'title': 'Month', 'content': 'With SameTime', 'current': 30.00, 'previous': 40.00}
    ];
    quicks = [
        [
            {'href': '/addProduct', 'name': 'add_salse', 'text': 'Add Items', 'disable': false},
            {'href': '/home', 'name': 'add_user', 'text': 'Add members', 'disable': false},
            {'href': '/home', 'name': 'sales_account', 'text': 'Cash register', 'disable': false},
            {'href': '/home', 'name': 'a_note', 'text': 'Expenditure management', 'disable': false}
        ],
        [
            {'href': '/productList', 'name': 'sales_management', 'text': 'Merchandise management', 'disable': false},
            {'href': '/home', 'name': 'user_management', 'text': 'Member Management', 'disable': false},
            {'href': '/home', 'name': 'shop_management', 'text': 'Query sales', 'disable': false},
            {'href': '/home', 'name': 'analysis', 'text': 'Insight', 'disable': false}
        ],
        [
            {'href': '/supplierList', 'name': 'gongying_more', 'text': 'Supplier management', 'disable': false},
            {'href': '/home', 'name': 'guandan_more', 'text': 'Pending order', 'disable': false},
            {'href': '/home', 'name': 'image_addsales', 'text': 'Advanced Features', 'disable': false},
            {'disable': true}
        ]
    ];
    constructor(private router: Router, private localStorageService: LocalStorageService) { }
    ionViewWillEnter() {
        // let login = this.localStorageService.get('login', null);
        // if (login == null) {
        //     this.router.navigateByUrl('login');
        // }
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
}
