import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { ActionSheetController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
    count = 0;
    activeCategory: Category;
    categories: Array<Category>;
    constructor(private categoryService: CategoryService, private actionSheetController: ActionSheetController,
                private router: Router, private events: Events) {
        categoryService.getAll().then((data) => {
            this.categories = data.result;
            if (this.categories) {
                this.activeCategory = this.categories[0];
            }
        });
    }
    ionViewWillEnter() {
        this.categoryService.getAll().then((data) => {
            this.categories = data.result;
            if (this.categories) {
                this.activeCategory = this.categories[0];
            }
        });
    }
  
    ngOnInit() {
    }
    async onPresentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: '选择您的操作',
            buttons: [
                {
                    text: '新增小分类',
                    role: 'destructive',
                    handler: () => {
                        this.router.navigateByUrl('/add-category',
                            {queryParams: {'id': this.activeCategory.id, 'name': this.activeCategory.name}});
                    }
                }, {
                    text: '编辑分类',
                    handler: () => {
                        this.router.navigate(['/editCategory'], 
                            {queryParams: {'id': this.activeCategory.id}});
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        await actionSheet.present();
    }
    getItemColor(id: number): string {
        if (id === this.activeCategory.id) {
            return '';
        } else {
            return 'light';
        }
    }
    onSelectCategory(id: number) {
        for (let c of this.categories) {
            if (c.id === id) {
                this.activeCategory = c;
                break;
            }
        }
    }
    onSelectSubCategory(category: Category) {
        this.events.publish('category:selected', category, Date.now());
        //this.location.back();
    }
    back() {
        //this.location.back();
    }
}
