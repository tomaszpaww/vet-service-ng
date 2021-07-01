import { BackEndError } from './../../../../common/crud-resource';
import { OwnersResourceService } from './../../../providers/resources/owners-resource.service';
import { SpeciesResourceService } from './../../../providers/resources/species-resource.service';
import { Owner } from './../../../dto/owner';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PetsResourceService } from 'src/app/vet-service/providers/resources/pets-resource.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Species } from 'src/app/vet-service/dto/species';
import { Pet } from 'src/app/vet-service/dto/pet';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-pets-manage',
    templateUrl: './pets-manage.component.html',
    styleUrls: ['./pets-manage.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetsManageComponent implements OnInit, OnDestroy {
    public id: number;
    public action: 'new' | 'edit';
    public petForm: FormGroup;

    speciesStream: Observable<Species[]>
    ownersStream: Observable<Owner[]>

    private subscription = new Subscription();

    constructor(private petResource: PetsResourceService,
        private speciesResource: SpeciesResourceService,
        private ownersResource: OwnersResourceService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar) {

        this.action = this.route.snapshot.data.action;
        this.id = this.route.snapshot.params.id;
        this.petForm = this.formBuilder.group({
            birthday: [],
            vaccinated: [false],
            speciesId: [null, Validators.required],
            ownerId: [null, Validators.required]
        })
    }

    private fetchPet(): void {
        this.subscription.add(
            this.petResource.get(this.id).subscribe(
                pet => this.petForm.patchValue(pet)
            )
        )
    }

    private getManageObservable(): Observable<Pet | {}> {
        if (this.action == 'edit') {
            return this.petResource.update(this.id, this.petForm.value)
        } else {
            return this.petResource.create(this.petForm.value)
        }
    }

    private fetchRelations(): void {
        this.speciesStream = this.speciesResource.list();
        this.ownersStream = this.ownersResource.list();
    }

    public savePet(): void {
        if (this.petForm.valid) {
            this.subscription.add(
                this.getManageObservable().subscribe(
                    res => this.snackBar.open('Pet has been saved successfuly!', 'Close', environment.snackbarConfig),
                    err => this.handleManageError(err.error)
                )
            )
        }
    }

    private handleManageError(err: BackEndError): void {
        this.snackBar.open(this.petResource.extractBackendError(err), 'Close', environment.snackbarConfig);
    }

    ngOnInit(): void {
        this.action == 'edit' ? this.fetchPet() : null;
        this.fetchRelations();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
