import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, Observable } from 'rxjs';
import { OwnersResourceService } from './../../../providers/resources/owners-resource.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from 'src/app/vet-service/dto/owner';
import { Address } from 'src/app/vet-service/dto/address';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-owners-manage',
    templateUrl: './owners-manage.component.html',
    styleUrls: ['./owners-manage.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnersManageComponent implements OnInit, OnDestroy {
    public id: number;
    public action: 'new' | 'edit';
    public ownerForm: FormGroup;

    private filter = { include: ['address'] };
    private subscription = new Subscription();

    constructor(private ownersResource: OwnersResourceService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute) {

        this.action = this.route.snapshot.data.action;
        this.id = this.route.snapshot.params.id;
        this.ownerForm = this.formBuilder.group({
            fullName: [null, Validators.required],
            address: this.formBuilder.group({
                city: [],
                street: [],
                zipCode: [],
                country: []
            })
        })
    }

    private fetchOwner(): void {
        this.subscription.add(
            this.ownersResource.get(this.id, { filter: JSON.stringify(this.filter) }).subscribe(
                owner => this.ownerForm.patchValue(owner)
            )
        )
    }

    public saveOwner(): void {
        if (this.ownerForm.valid) {
            this.subscription.add(
                this.getManageOwnerObservable().pipe(
                    switchMap((owner) => this.getManageAddressObservable(owner?.id || this.id)))
                    .subscribe(
                        (res) => this.snackBar.open(`Owner has been saved!`, 'Close', environment.snackbarConfig)
                    )
            );
        }
    }

    private getManageOwnerObservable(): Observable<Owner> {
        if (this.action == 'edit') {
            return this.ownersResource.update(this.id, _.omit(this.ownerForm.value, 'address'))
        } else {
            return this.ownersResource.create(_.omit(this.ownerForm.value, 'address'))
        }
    }

    private getManageAddressObservable(ownerId: number): Observable<Address | {}> {
        if (this.action == 'edit') {
            return this.ownersResource.updateAddress(this.ownerForm.value.address, ownerId)
        } else {
            return this.ownersResource.createAddress(this.ownerForm.value.address, ownerId)
        }
    }

    ngOnInit(): void {
        this.action == 'edit' ? this.fetchOwner() : null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
