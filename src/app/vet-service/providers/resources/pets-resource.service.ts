import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Pet } from './../../dto/pet';
import { CrudResource } from './../../../common/crud-resource';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PetsResourceService extends CrudResource<Pet> {

    constructor(httpClient: HttpClient) {
        super(`${environment.serverUrl}/pets`, httpClient);
    }
}
