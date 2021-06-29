import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export class CrudResource<T> {

    constructor(protected URL: string,
        protected readonly httpClient: HttpClient) {
    }

    public create<K>(payload: K, params?: HttpParams | OptionalHttpParams): Observable<T> {
        return this.httpClient.post<T>(this.URL, payload, { params });
    }

    public delete(id: string | number, params?: HttpParams | OptionalHttpParams): Observable<void> {
        return this.httpClient.delete<void>(this.URL + '/' + id, { params });
    }

    public get(id: string | number, params?: HttpParams | OptionalHttpParams): Observable<T> {
        return this.httpClient.get<T>(`${this.URL}/${id}`, { params });
    }

    public list(params?: HttpParams | OptionalHttpParams): Observable<T[] | any> {
        return this.httpClient.get<T[]>(`${this.URL}`, { params });
    }

    public update<K>(id: string | number, payload: K | any, params?: HttpParams | OptionalHttpParams): Observable<T> {
        return this.httpClient.put<T>(this.URL + '/' + id, payload, { params });
    }

    public extractBackendError(error: BackEndError): string {
        const detail: BackendErrorDetail = error.error.details[0];
        return `${detail.path} ${detail.message}`;
    }
}

export interface OptionalHttpParams {
    [param: string]: string | string[];
}

export interface BackEndError {
    error: {
        statusCode: number,
        name: string,
        message: string,
        code: string,
        details: BackendErrorDetail[]
    }
}

export interface BackendErrorDetail {
    path: string;
    code: string;
    message: string;
    info: object
}