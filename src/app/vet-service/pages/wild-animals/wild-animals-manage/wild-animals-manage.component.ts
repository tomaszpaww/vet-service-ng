import { BackEndError } from './../../../../common/crud-resource';
import { WildAdnimal } from './../../../dto/wild-animal';
import { environment } from './../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpeciesResourceService } from './../../../providers/resources/species-resource.service';
import { WildAnimalsResourceService } from './../../../providers/resources/wild-animals-resource.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Species } from 'src/app/vet-service/dto/species';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-wild-animals-manage',
    templateUrl: './wild-animals-manage.component.html',
    styleUrls: ['./wild-animals-manage.component.scss']
})
export class WildAnimalsManageComponent implements OnInit, OnDestroy {
    public id: number;
    public action: 'new' | 'edit';
    public wildAnimalForm: FormGroup;
    public speciesStream: Observable<Species[]>;

    private subscription = new Subscription();

    constructor(private wildAnimalsResource: WildAnimalsResourceService,
        private speciesResourceService: SpeciesResourceService,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private formBuilder: FormBuilder) {

        this.action = this.route.snapshot.data.action;
        this.id = this.route.snapshot.params.id;
        this.wildAnimalForm = this.formBuilder.group({
            birthday: [null],
            trackingId: [null, Validators.required],
            speciesId: [null, Validators.required],
            vaccinated: [false]
        })
    }

    ngOnInit(): void {
        this.fetchSpecies();
        this.action == 'edit' ? this.fetchWildAnimal() : null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public saveWildAnimal(): void {
        if (this.wildAnimalForm.valid) {
            this.subscription.add(
                this.getManageObservable().subscribe(
                    res => this.snackBar.open(`Wild animal saved successfuly!`, 'OK', environment.snackbarConfig),
                    err => this.handleManageError(err.error)
                )
            );
        }
    }

    private getManageObservable(): Observable<WildAdnimal> {
        if (this.action == 'edit') {
            return this.wildAnimalsResource.update(this.id, this.wildAnimalForm.value)
        } else {
            return this.wildAnimalsResource.create(this.wildAnimalForm.value)
        }
    }

    private fetchSpecies(): void {
        this.speciesStream = this.speciesResourceService.list();
    }

    private fetchWildAnimal(): void {
        this.subscription.add(
            this.wildAnimalsResource.get(this.id).subscribe(
                wildAnimal => this.wildAnimalForm.patchValue(wildAnimal)
            )
        )
    }

    private handleManageError(err: BackEndError) {
        this.snackBar.open(this.wildAnimalsResource.extractBackendError(err), 'Close', environment.snackbarConfig);
    }
}
