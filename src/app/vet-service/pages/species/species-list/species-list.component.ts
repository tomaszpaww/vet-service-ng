import { environment } from './../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Species } from './../../../dto/species';
import { Observable, Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SpeciesResourceService } from 'src/app/vet-service/providers/resources/species-resource.service';

@Component({
    selector: 'app-species-list',
    templateUrl: './species-list.component.html',
    styleUrls: ['./species-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeciesListComponent implements OnInit, OnDestroy {
    displayedColumns = ['id', 'label', 'Actions'];
    public speciesStream: Observable<Species[]>;
    private subscription = new Subscription();
    constructor(private speciesResource: SpeciesResourceService,
        private cdr: ChangeDetectorRef,
        private snackBar: MatSnackBar) { }

    private fetchList(): void {
        this.speciesStream = this.speciesResource.list();
    }

    public removeSpecies(species: Species): void {
        if (confirm("Are you sure?")) {
            this.subscription.add(
                this.speciesResource.delete(species.id).subscribe(
                    res => {
                        this.fetchList()
                        this.cdr.markForCheck();
                        this.snackBar.open(`${species.label} has been removed!`, 'Close', environment.snackbarConfig);
                    }
                )
            )
        }
    }

    ngOnInit(): void {
        this.fetchList();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
