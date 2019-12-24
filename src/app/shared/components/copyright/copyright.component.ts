import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss'],
})
export class CopyrightComponent {
    @Input() bottom: string;
    text: string;
    constructor() {
        let year = (new Date()).getFullYear();
        this.text = `2010-${year} LYY-ShengYiZhuanJia`;
        this.bottom = '10px';
    }
}
