import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiRequest, ApiResponse } from "./api.interface";
import { Observable, map, catchError } from "rxjs";
import { BASE_API_URL } from "src/app/constant/api";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    get<T>(request: ApiRequest): Observable<T> {
        const url = `${BASE_API_URL}/${request.uri.replace('/', '')}`;
        return this.httpClient.get<T>(url, request.headers);
      }
}