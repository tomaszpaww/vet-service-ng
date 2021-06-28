import { Owner } from './../../dto/owner';
import { CrudResource } from './../../../common/crud-resource';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnersResourceService extends CrudResource<Owner> {

  constructor(httpClient: HttpClient) {
    super(`${environment.serverUrl}/owners`, httpClient);
  }
}
