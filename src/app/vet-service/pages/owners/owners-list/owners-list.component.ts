import { Owner } from './../../../dto/owner';
import { Observable } from 'rxjs';
import { OwnersResourceService } from './../../../providers/resources/owners-resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-owners-list',
    templateUrl: './owners-list.component.html',
    styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {
    displayedColumns = ['id', 'fullName', 'Actions'];

    ownersStream: Observable<Owner[]>;
    constructor(private ownersResource: OwnersResourceService) { }

    ngOnInit(): void {
        this.fetchOwners();
    }

    private fetchOwners(): void {
        this.ownersStream = this.ownersResource.list();
    }
}
