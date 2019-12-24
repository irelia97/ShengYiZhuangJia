import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartAppGuard } from './core/start-app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', // 原来是home
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  // 下面这行代码是在创建页面时，Ionic自动更新的
  { 
    path: 'welcome', loadChildren: './routes/welcome/welcome.module#WelcomePageModule', 
    //canActivate: [StartAppGuard] 
  },
  { path: 'signup', loadChildren: './routes/passport/signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './routes/login/login.module#LoginPageModule' },
  { path: 'forgot-password', loadChildren: './routes/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'setting', loadChildren: './routes/setting/setting.module#SettingPageModule' },
  { path: 'shopsetting', loadChildren: './routes/shopsetting/shopsetting.module#ShopsettingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
