import { Subscription } from 'rxjs';
import { OwnersResourceService } from './../../../providers/resources/owners-resource.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Owner } from 'src/app/vet-service/dto/owner';

@Component({
    selector: 'app-owners-page',
    templateUrl: './owners-page.component.html',
    styleUrls: ['./owners-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnersPageComponent implements OnInit, OnDestroy {
    id: number
    owner: Owner;
    petsDisplayedColumns = ['birthday', 'vaccinated', 'species'];

    private subscription = new Subscription();
    private filter = {
        include: [
            { relation: 'address' },
            {
                relation: 'pets',
                scope: {
                    include: [{ relation: 'species' }]
                }
            }
        ]
    };

    constructor(private ownersResource: OwnersResourceService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params.id
    }

    private fetchOwner(): void {
        this.subscription.add(
            this.ownersResource.get(this.id, { filter: JSON.stringify(this.filter) }).subscribe(
                owner => this.owner = owner
            )
        )
    }

    ngOnInit(): void {
        this.fetchOwner();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
