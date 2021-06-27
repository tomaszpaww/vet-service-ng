import { OwnersListComponent } from './owners-list/owners-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: '',
              component: OwnersListComponent
          },
          // {
          //     path: ':id',
          //     component: HubPageComponent
          // },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
