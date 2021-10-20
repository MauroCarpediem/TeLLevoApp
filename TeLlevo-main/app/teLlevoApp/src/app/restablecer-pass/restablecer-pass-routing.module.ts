import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerPassPage } from './restablecer-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerPassPageRoutingModule {}
