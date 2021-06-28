import { environment } from './../../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Species } from './../../../dto/species';
import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpeciesResourceService } from 'src/app/vet-service/providers/resources/species-resource.service';

@Component({
    selector: 'app-species-list',
    templateUrl: './species-list.component.html',
    styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
    displayedColumns = ['id', 'label', 'Actions'];
    public speciesStream: Observable<Species[]>;

    constructor(private speciesResource: SpeciesResourceService, private snackBar: MatSnackBar) { }

    private fetchList(): void {
        this.speciesStream = this.speciesResource.list();
    }

    public removeSpecies(species: Species) {
        if (confirm("Are you sure?")) {
            this.speciesResource.delete(species.id).subscribe(
                res => {
                    this.fetchList()
                    this.snackBar.open(`${species.label} has been removed!`, 'Close', environment.snackbarConfig);
                }
            )
        }
    }

    ngOnInit(): void {
        this.fetchList();
    }
}
