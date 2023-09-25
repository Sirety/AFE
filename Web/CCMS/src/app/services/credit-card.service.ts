import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditCard } from '../credit-card/model';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  rootUrl = environment.apiUrl;
  port = environment.port;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl + this.port}/cards/`);
  }

  getCreditCard(card_number: number): Observable<CreditCard> {
    return this.http.get<CreditCard>(
      `${this.rootUrl + this.port}/cards/${card_number}`
    );
  }

  deleteCard(card_number: number): Observable<CreditCard> {
    return this.http
      .delete<CreditCard>(`${this.rootUrl + this.port}/cards/${card_number}`)
      .pipe(
        catchError((e) => this.handleErrorCreditCardNumber(e, card_number))
      );
  }

  postCreditCard(card: CreditCard): Observable<CreditCard> {
    return this.http
      .post<CreditCard>(this.rootUrl + this.port + '/cards/', card)
      .pipe(
        catchError((e) => this.handleErrorCreditCardNumber(e, card.card_number))
      );
  }

  handleErrorCreditCardNumber(error: HttpErrorResponse, card_number: Number) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      console.error('When adding card:', card_number);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
