import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Species } from './../../dto/species';
import { CrudResource } from './../../../common/crud-resource';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpeciesResourceService extends CrudResource<Species> {
    constructor(httpClient: HttpClient) {
        super(`${environment.serverUrl}/species`, httpClient);
    }
}
