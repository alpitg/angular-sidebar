import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounting',
    loadChildren: () => import('./areas/accounting/accounting.module').then(m => m.AccountingModule)
  },
  {
    path: '',
    redirectTo: '/accounting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
