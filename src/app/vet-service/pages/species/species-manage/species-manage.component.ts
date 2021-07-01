import { BackEndError } from './../../../../common/crud-resource';
import { WildAdnimal } from './../../../dto/wild-animal';
import { environment } from './../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpeciesResourceService } from './../../../providers/resources/species-resource.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { Species } from 'src/app/vet-service/dto/species';

@Component({
    selector: 'app-species-manage',
    templateUrl: './species-manage.component.html',
    styleUrls: ['./species-manage.component.scss']
})
export class SpeciesManageComponent implements OnInit, OnDestroy {
    public id: number;

    public action: 'new' | 'edit';
    speciesForm: FormGroup;
    subscription: Subscription = new Subscription();

    constructor(private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private speciesResource: SpeciesResourceService) {

        this.action = this.route.snapshot.data.action;
        this.id = this.route.snapshot.params.id;
        this.speciesForm = this.formBuilder.group({
            label: [null, [Validators.required]]
        });
    }

    public saveSpecies() {
        if (this.speciesForm.valid) {
            this.subscription.add(
                this.getManageObservable().subscribe(
                    res => this.snackBar.open('Species has been saved successfuly!', 'OK', environment.snackbarConfig),
                    err => this.handleManageError(err.error)
                )
            )
        }
    }

    private getManageObservable(): Observable<Species> {
        if (this.action == 'edit') {
            return this.speciesResource.update(this.id, this.speciesForm.value);
        } else {
            return this.speciesResource.create(this.speciesForm.value);
        }
    }

    private fetchSpecies() {
        this.subscription.add(
            this.speciesResource.get(this.id).subscribe(
                species => this.speciesForm.patchValue(species)
            )
        );
    }

    private handleManageError(err: BackEndError) {
        this.snackBar.open(this.speciesResource.extractBackendError(err), 'Close', environment.snackbarConfig);
    }

    ngOnInit(): void {
        this.action == 'edit' ? this.fetchSpecies() : null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
