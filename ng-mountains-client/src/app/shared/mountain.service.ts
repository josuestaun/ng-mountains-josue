import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Mountain } from './mountain';

@Injectable({
  providedIn: 'root'
})
export class MountainService {
  private mountainsUrl = 'localhost:8000/mountains';

  constructor(private http: HttpClient) { }

  getMountains(): Observable<Mountain[]> {
    return this.http.get<Mountain[]>(this.mountainsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxMountainId(): Observable<Mountain> {
    return this.http.get<Mountain[]>(this.mountainsUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getMountainById(id: number): Observable<Mountain> {
    const url = `${this.mountainsUrl}/${id}`;
    return this.http.get<Mountain>(url)
      .pipe(
        tap(data => console.log('getMountain: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createMountain(mountain: Mountain): Observable<Mountain> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    mountain.id = null;
    return this.http.post<Mountain>(this.mountainsUrl, mountain, { headers: headers })
      .pipe(
        tap(data => console.log('createMountain: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteMountain(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.mountainsUrl}/${id}`;
    return this.http.delete<Mountain>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteMountain: ' + id)),
        catchError(this.handleError)
      );
  }

  updateMountain(mountain: Mountain): Observable<Mountain> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.mountainsUrl}/${mountain.id}`;
    return this.http.put<Mountain>(url, mountain, { headers: headers })
      .pipe(
        tap(() => console.log('updateMountain: ' + mountain.id)),
        // Return the mountain on an update
        map(() => mountain),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
