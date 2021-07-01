import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Pet } from 'src/app/vet-service/dto/pet';
import { PetsResourceService } from 'src/app/vet-service/providers/resources/pets-resource.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-pets-list',
    templateUrl: './pets-list.component.html',
    styleUrls: ['./pets-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetsListComponent implements OnInit, OnDestroy {

    petsStream: Observable<Pet[]>;
    displayedColumns = ['id', 'birthday', 'vaccinated', 'species', 'owner', 'actions'];

    private filter = { include: ['owner', 'species'] }
    private subscription = new Subscription();

    constructor(private petResource: PetsResourceService,
        private cdr: ChangeDetectorRef,
        private snackBar: MatSnackBar) { }

    public fetchPets(): void {
        this.petsStream = this.petResource.list({ filter: JSON.stringify(this.filter) });
    }

    public deletePet(pet: Pet): void {
        if (confirm(`Are you sure you want to delete ${pet.owner.fullName}'s pet?`)) {
            this.subscription.add(
                this.petResource.delete(pet.id).subscribe(
                    res => {
                        this.snackBar.open(`${pet.owner.fullName}'s ${pet.species.label} has been removed!`, 'Close', environment.snackbarConfig);
                        this.fetchPets()
                        this.cdr.markForCheck();
                    }
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
