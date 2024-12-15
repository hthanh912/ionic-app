import { BookItem } from "src/app/models";
import { ApiService } from "../http/api.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

export interface BooksParam {
    page: number,
}

@Injectable({
    providedIn: 'root',
})
export class BookService {
    constructor(private apiService: ApiService) {}

    public getBooks(param: BooksParam): Observable<BookItem[]> {
        return this.apiService.get<BookItem[]>({uri: `books?page=${param.page}&sort=ratingsCount,desc`})
    }
}