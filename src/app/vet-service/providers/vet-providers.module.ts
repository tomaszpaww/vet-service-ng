import { WildAnimalsResourceService } from './resources/wild-animals-resource.service';
import { OwnersResourceService } from './resources/owners-resource.service';
import { SpeciesResourceService } from './resources/species-resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PetsResourceService } from './resources/pets-resource.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        SpeciesResourceService,
        OwnersResourceService,
        PetsResourceService,
        WildAnimalsResourceService
    ]
})
export class VetProvidersModule { }
