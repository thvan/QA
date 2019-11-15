import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TailieuListComponent } from './tailieu12/Video/tailieu-list/tailieu-list.component';
import { GiaotrinhListComponent } from './tailieu12/giaotrinh/giaotrinh-list/giaotrinh-list.component';

// import { CHDETAILSComponent } from './CH-CTL/CH/ch-details/ch-details.component';
import { CHLISTComponent } from './CH-CTL/CH/ch-list/ch-list.component';
import { CTLLISTComponent } from './CH-CTL/CTL/ctl-list/ctl-list.component';
// import { CTLDETAILSComponent } from './CH-CTL/CTL/ctl-details/ctl-details.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module'


const routes: Routes = [
  // { path: 'tailieu12', component: TailieuListComponent },
  // { path: 'add', component: CreateTailieuComponent }

  // { path: '', redirectTo: 'tailieu12', pathMatch: 'full' },
  { path: 'VIDEO', component: TailieuListComponent },
  { path: 'GIAO TRINH', component: GiaotrinhListComponent },

  { path: 'CH', component: CHLISTComponent },
  { path: 'CTL', component: CTLLISTComponent },
  { path: 'admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  // s{ path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
