import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {MainRaportPageComponent} from "./views/main-raport-page/main-raport-page.component";
import {RaportPageComponent} from "./views/raport-page/raport-page.component";
import {ReadyReportsComponent} from "./views/ready-reports/ready-reports.component";

const routes: Routes = [
  {path: '', component:LayoutComponent,
    children: [
      {path:'', component:MainRaportPageComponent},
      {path: '', loadChildren:() => import('./views/user/user.module').then (m => m.UserModule)},
      {path:'raport', component:RaportPageComponent},
      {path:'solutions', component:ReadyReportsComponent},

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
