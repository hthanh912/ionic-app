import { BookItem } from "src/app/models";
import { ApiService } from "../http/api.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { BookDetail } from "src/app/models/book-detail";

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

    public getDetailBook(id: number): Observable<BookDetail> {
        return this.apiService.get<BookDetail>({uri: `books/${id}`})
    }
}