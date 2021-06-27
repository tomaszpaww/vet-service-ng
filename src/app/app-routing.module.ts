import { vetPagesRoutes } from './vet-service/pages/vet-pages.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(vetPagesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
