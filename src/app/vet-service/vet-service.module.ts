import { PetsListComponent } from './pages/pets/pets-list/pets-list.component';
import { MatTableModule } from '@angular/material/table';
import { VetProvidersModule } from './providers/vet-providers.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { PetsListTableComponent } from './components/pets-list-table/pets-list-table.component';

@NgModule({
    declarations: [
        SidebarComponent,
        PetsListTableComponent,
    ],
    imports: [
        CommonModule,
        MatListModule,
        VetProvidersModule,
        RouterModule,
        MatTableModule
    ],
    exports: [
        SidebarComponent,
        PetsListTableComponent
    ]
})
export class VetServiceModule { }
