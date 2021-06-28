import { WildAnimalsManageComponent } from './wild-animals-manage/wild-animals-manage.component';
import { WildAnimalsListComponent } from './wild-animals-list/wild-animals-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: WildAnimalsListComponent
            },
            {
                path: 'new',
                component: WildAnimalsManageComponent,
                data: { action: 'new' }
            },
            {
                path: ':id/edit',
                component: WildAnimalsManageComponent,
                data: { action: 'edit' }
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WildAnimalsRoutingModule { }
