import { SpeciesManageComponent } from './species-manage/species-manage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SpeciesListComponent } from './species-list/species-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SpeciesListComponent
      },
      {
        path: 'new',
        component: SpeciesManageComponent,
        data: { action: 'new' }
      },
      {
        path: ':id/edit',
        component: SpeciesManageComponent,
        data: { action: 'edit' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
