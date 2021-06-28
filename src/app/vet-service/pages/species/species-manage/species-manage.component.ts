import { environment } from './../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpeciesResourceService } from './../../../providers/resources/species-resource.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

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
        private snackBack: MatSnackBar,
        private speciesResource: SpeciesResourceService) {

        this.action = this.route.snapshot.data.action;
        this.id = this.route.snapshot.params.id;
        this.speciesForm = this.formBuilder.group({
            label: [null, [Validators.required]]
        });
    }

    public saveSpecies() {
        if (this.action == 'edit') {
            this.subscription.add(
                this.speciesResource.update(this.id, this.speciesForm.value).subscribe(
                    res => this.snackBack.open('Species updated successfuly!', 'OK', environment.snackbarConfig),
                    err => this.handleManageError(err)
                )
            );
        } else {
            this.subscription.add(
                this.speciesResource.create(this.speciesForm.value).subscribe(
                    res => this.snackBack.open('Species created successfuly!', 'OK', environment.snackbarConfig),
                    err => this.handleManageError(err)
                )
            );
        }
    }

    private fetchSpecies() {
        this.subscription.add(
            this.speciesResource.get(this.id).subscribe(
                species => this.speciesForm.patchValue(species)
            )
        );
    }

    private handleManageError(err: HttpErrorResponse) {
        console.log(err);
    }

    ngOnInit(): void {
        this.action == 'edit' ? this.fetchSpecies() : null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
