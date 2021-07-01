import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Pet } from '../../dto/pet';

@Component({
    selector: 'app-pets-list-table',
    templateUrl: './pets-list-table.component.html',
    styleUrls: ['./pets-list-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetsListTableComponent {
    @Input() pets: Observable<Pet[]> | Pet[];
    @Input() displayedColumns: string[];
    @ContentChild(TemplateRef) actionMenuTemplate: TemplateRef<any>;

    constructor() { }
}
