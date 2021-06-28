import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WildAnimalsResourceService } from 'src/app/vet-service/providers/resources/wild-animals-resource.service';
import { WildAdnimal } from 'src/app/vet-service/dto/wild-animal';

@Component({
    selector: 'app-wild-animals-list',
    templateUrl: './wild-animals-list.component.html',
    styleUrls: ['./wild-animals-list.component.scss']
})
export class WildAnimalsListComponent implements OnInit {
    displayedColumns = ['id', 'birthday', 'vaccinated', 'species', 'Actions'];
    wildAnimalsStream: Observable<WildAdnimal[]>
    filters = { include: [{ relation: 'species' }] };
    constructor(private wildAnimalsResource: WildAnimalsResourceService) { }

    ngOnInit(): void {
        this.fetchWildAnimals();
    }

    public fetchWildAnimals(): void {
        this.wildAnimalsStream = this.wildAnimalsResource.list({ filter: JSON.stringify(this.filters) });
    }
}
