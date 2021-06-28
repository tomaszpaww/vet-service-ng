import { CrudResource } from './../../../common/crud-resource';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WildAdnimal } from '../../dto/wild-animal';

@Injectable({
    providedIn: 'root'
})
export class WildAnimalsResourceService extends CrudResource<WildAdnimal> {

    constructor(httpClient: HttpClient) {
        super(`${environment.serverUrl}/wild-animals`, httpClient);
    }
}
