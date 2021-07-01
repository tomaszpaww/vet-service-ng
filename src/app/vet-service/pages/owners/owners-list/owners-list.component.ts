import { MatSnackBar } from '@angular/material/snack-bar';
import { Owner } from './../../../dto/owner';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OwnersResourceService } from './../../../providers/resources/owners-resource.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-owners-list',
    templateUrl: './owners-list.component.html',
    styleUrls: ['./owners-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnersListComponent implements OnInit, OnDestroy {
    displayedColumns = ['id', 'fullName', 'street', 'city', 'country', 'zipCode', 'Actions'];
    ownersStream: Observable<Owner[]>;
    private filter = { include: ['address'] };
    private subscription = new Subscription();

    constructor(private ownersResource: OwnersResourceService,
        private cdr: ChangeDetectorRef,
        private snackBar: MatSnackBar) { }


    private fetchOwners(): void {
        this.ownersStream = this.ownersResource.list({ filter: JSON.stringify(this.filter) });
    }

    public deleteOwner(owner: Owner): void {
        if (confirm(`Are you sure you want to delete ${owner.fullName}?`)) {
            this.subscription.add(
                this.ownersResource.delete(owner.id).
                    pipe(
                        switchMap(res => this.ownersResource.deleteAddress(owner.id))
                    ).
                    subscribe(
                        (res) => {
                            this.snackBar.open(`${owner.fullName} has been removed!`, 'Close', environment.snackbarConfig);
                            this.fetchOwners();
                            this.cdr.markForCheck();
                        }
                    )
            )
        }
    }

    ngOnInit(): void {
        this.fetchOwners();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
