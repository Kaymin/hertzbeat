import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';

import { DetectAuthGuard } from '../core/guard/detect-auth-guard';
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { LayoutBlankComponent } from '../layout/blank/blank.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { UserLoginComponent } from './passport/login/login.component';
import { CustomPluginComponent } from './plugin/custom-plugin/custom-plugin.component';
import { OfficialPluginComponent } from './plugin/offical-plugin/official-plugin.component';
import { StatusPublicComponent } from './status-public/status-public.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [DetectAuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { titleI18n: 'menu.dashboard' } },
      { path: 'bulletin', component: BulletinComponent, data: { titleI18n: 'menu.monitor.bulletin' } },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      { path: 'monitors', loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorModule) },
      { path: 'alert', loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule) },
      {
        path: 'plugin',
        data: { titleI18n: 'menu.advanced.plugin' },
        children: [
          { path: '', redirectTo: 'official-plugin', pathMatch: 'full' },
          {
            path: 'official-plugin',
            component: OfficialPluginComponent,
            data: { titleI18n: 'plugin.type.official' }
          },
          {
            path: 'custom-plugin',
            component: CustomPluginComponent,
            data: { titleI18n: 'plugin.type.custom' }
          }
        ]
      },
      { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) }
    ]
  },
  {
    path: 'status',
    component: LayoutBlankComponent,
    children: [{ path: '', component: StatusPublicComponent, data: { titleI18n: 'menu.advanced.status' } }]
  },
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { titleI18n: 'app.login.login' } },
      { path: 'lock', component: UserLockComponent, data: { titleI18n: 'app.lock' } }
    ]
  },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
