import { Observable } from 'rxjs';
import { Owner } from './../../dto/owner';
import { CrudResource } from './../../../common/crud-resource';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../../dto/address';

@Injectable({
    providedIn: 'root'
})
export class OwnersResourceService extends CrudResource<Owner> {

    constructor(httpClient: HttpClient) {
        super(`${environment.serverUrl}/owners`, httpClient);
    }

    public createAddress(address: Address, ownerId: number): Observable<Address> {
        return this.httpClient.post<Address>(`${this.URL}/${ownerId}/address`, address);
    }

    public updateAddress(address: Address, ownerId: number): Observable<{}> {
        return this.httpClient.patch<{}>(`${this.URL}/${ownerId}/address`, address);
    }

    public deleteAddress(ownerId: number): Observable<{}> {
        return this.httpClient.delete<{}>(`${this.URL}/${ownerId}/address`);
    }
}
