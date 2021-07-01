import { Observable } from 'rxjs';
import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Pet } from '../../dto/pet';

@Component({
    selector: 'app-pets-list-table',
    templateUrl: './pets-list-table.component.html',
    styleUrls: ['./pets-list-table.component.scss']
})
export class PetsListTableComponent implements OnInit {
    @Input() pets: Observable<Pet[]> | Pet[];
    @Input() displayedColumns: string[];
    @ContentChild(TemplateRef) actionMenuTemplate: TemplateRef<any>;

    constructor() { }

    ngOnInit(): void {
    }

}
