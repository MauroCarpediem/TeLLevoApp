import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoUsuarioPage } from './tipo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: TipoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoUsuarioPageRoutingModule {}
