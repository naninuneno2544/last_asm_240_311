import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  REST_API: string = 'http://localhost:3000/api'

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  AddBook(data: Book): Observable<any>{
    let API_URL = `${this.REST_API}/post`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  GetBooks() {
    return this.httpClient.get(`${this.REST_API}/getAll`)
  }

  GetBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/getOne/${id}`
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }

  updateBook(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update/${id}`
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteBook(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`
    return this.httpClient.put(API_URL, { headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: $(error.message)`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}