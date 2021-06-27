import { WildAnimalsModule } from './wild-animals/wild-animals.module';
import { SpeciesModule } from './species/species.module';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        OwnersModule,
        PetsModule,
        SpeciesModule,
        WildAnimalsModule
    ],
})
export class VetPagesModule { }
