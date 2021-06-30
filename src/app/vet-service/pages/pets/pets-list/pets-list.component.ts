import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pet } from 'src/app/vet-service/dto/pet';
import { PetsResourceService } from 'src/app/vet-service/providers/resources/pets-resource.service';

@Component({
    selector: 'app-pets-list',
    templateUrl: './pets-list.component.html',
    styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit, OnDestroy {

    petsStream: Observable<Pet[]>;
    displayedColumns = ['id', 'birthday', 'vaccinated', 'species', 'owner', 'actions'];

    private subscription = new Subscription();
    constructor(private petResource: PetsResourceService, private snackBar: MatSnackBarModule) { }

    public fetchPets(): void {
        this.petsStream = this.petResource.list({ 'filter[include][0]': 'owner', 'filter[include][1]': 'species' });
    }

    public deletePet(pet: Pet): void {
        if (confirm(`Are you sure you want to delete ${pet.owner.fullName}'s pet?`)) {
            this.subscription.add(
                this.petResource.delete(pet.id).subscribe(
                    res => this.fetchPets()
                )
            )
        }
    }

    ngOnInit(): void {
        this.fetchPets();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
