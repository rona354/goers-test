import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HandleErrorsService } from 'src/app/Services/handle-errors.service';
import { RandomAPI } from '../interfaces/random-api.interface';

@Injectable({
  providedIn: 'root',
})
export class WebServiceService {
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public handleError: HandleErrorsService // public errorHandler: ErrorHandlerService
  ) {}

  /* GET Itunes by search */
  public getRandomAPI(count: number): Observable<RandomAPI> {
    // console.log('api url', this.apiUrl);
    return this.httpClient
      .jsonp<RandomAPI>(
        `https://randomuser.me/api/?results=${count}`,
        'callback'
      )
      .pipe(catchError((error) => this.handleError.handleError(error)));
  }
}
