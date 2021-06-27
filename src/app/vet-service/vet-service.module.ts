import { VetProvidersModule } from './providers/vet-providers.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VetPagesModule } from './pages/vet-pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        VetPagesModule,
        MatListModule,
        VetProvidersModule,
        RouterModule
    ],
    exports: [
        SidebarComponent
    ]
})
export class VetServiceModule { }
