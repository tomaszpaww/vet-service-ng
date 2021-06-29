import { OwnersManageComponent } from './owners-manage/owners-manage.component';
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
            {
                path: 'new',
                component: OwnersManageComponent,
                data: { action: 'new' }
            },
            {
                path: ':id/edit',
                component: OwnersManageComponent,
                data: { action: 'edit' }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OwnersRoutingModule { }
