import { PetsListComponent } from './pets-list/pets-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PetsManageComponent } from './pets-manage/pets-manage.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PetsListComponent
            },
            {
                path: 'new',
                component: PetsManageComponent,
                data: { action: 'new' }
            },
            {
                path: ':id/edit',
                component: PetsManageComponent,
                data: { action: 'edit' }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PetsRoutingModule { }
