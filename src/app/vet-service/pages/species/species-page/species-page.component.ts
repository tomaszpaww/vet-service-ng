import { Subscription } from 'rxjs';
import { SpeciesResourceService } from './../../../providers/resources/species-resource.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Species } from 'src/app/vet-service/dto/species';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-species-page',
    templateUrl: './species-page.component.html',
    styleUrls: ['./species-page.component.scss']
})
export class SpeciesPageComponent implements OnInit, OnDestroy {
    id: number;
    species: Species;
    petsDisplayedColumns = ['owner', 'birthday', 'vaccinated'];
    wildAnimalsDisplayedColumns = ['trackingId', 'birthday', 'vaccinated'];

    private filter = {
        include: [
            { relation: 'wildAnimals' },
            {
                relation: 'pets',
                scope: { include: [{ relation: 'owner' }] }
            }
        ]
    };
    private subscription = new Subscription();

    constructor(private spciesResource: SpeciesResourceService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params.id;
    }

    private fetchSpecies(): void {
        this.subscription.add(
            this.spciesResource.get(this.id, { filter: JSON.stringify(this.filter) }).subscribe(
                species => this.species = species
            )
        )
    }

    ngOnInit(): void {
        this.fetchSpecies();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
