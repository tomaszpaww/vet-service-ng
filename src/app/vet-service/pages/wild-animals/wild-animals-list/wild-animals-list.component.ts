import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WildAnimalsResourceService } from 'src/app/vet-service/providers/resources/wild-animals-resource.service';
import { WildAdnimal } from 'src/app/vet-service/dto/wild-animal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-wild-animals-list',
    templateUrl: './wild-animals-list.component.html',
    styleUrls: ['./wild-animals-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WildAnimalsListComponent implements OnInit {
    displayedColumns = ['id', 'trackingId', 'birthday', 'vaccinated', 'species', 'Actions'];
    wildAnimalsStream: Observable<WildAdnimal[]>
    filters = { include: [{ relation: 'species' }] };

    constructor(private wildAnimalsResource: WildAnimalsResourceService,
        private cdr: ChangeDetectorRef,
        private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.fetchWildAnimals();
    }

    public deleteWildAnimal(wildAnimal: WildAdnimal): void {
        if (confirm("Are you sure?")) {
            this.wildAnimalsResource.delete(wildAnimal.id).subscribe(
                res => {
                    this.snackBar.open(`Wild Animal#${wildAnimal.trackingId} has been removed!`, 'Close', environment.snackbarConfig);
                    this.fetchWildAnimals();
                    this.cdr.markForCheck();
                }
            )
        }
    }

    public fetchWildAnimals(): void {
        this.wildAnimalsStream = this.wildAnimalsResource.list({ filter: JSON.stringify(this.filters) });
    }

}
