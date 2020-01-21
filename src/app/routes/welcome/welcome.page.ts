import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
export const APP_KEY = 'App';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomePage implements OnInit {

  showSkip = true;
  @ViewChild('slides', {static: false}) slides: IonSlides;
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }
  onSlideWillChange(event) {
    console.log(event);
    this.slides.isEnd().then((end) => {
      this.showSkip = !end;
    });
  }
  onSkip() {
    this.router.navigateByUrl('\signup');
  }

  ionViewWillEnter() {
    let appConfig: any = this.localStorageService.get('App', {
      hasRun: false,
      version: '1.1.1'
    });
    if ( appConfig.hasRun == false ) {
      appConfig.hasRun = true;
      this.localStorageService.set('App', appConfig);
    } else {
      this.router.navigateByUrl('\home');
    }
  }
}
