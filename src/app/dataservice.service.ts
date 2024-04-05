import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}
  getAnimals(): Observable<any> {
    return this.http.get<any>('assets/data/animals.json');
  }

  // Function to fetch colors data
  getColors(): Observable<any> {
    return this.http.get<any>('assets/data/colors.json');
  }

  getNumbers(): Observable<any> {
    return this.http.get<any>('assets/data/numbers.json');
  }

  getAlphabets(): Observable<any> {
    return this.http.get<any>('assets/data/alphabets.json');
  }

  // Function to fetch shapes data
  getShapes(): Observable<any> {
    return this.http.get<any>('assets/data/shapes.json');
  }

  // Function to fetch objects data
  getObjects(): Observable<any> {
    return this.http.get<any>('assets/data/objects.json');
  }

  getBirds(): Observable<any> {
    return this.http.get<any>('assets/data/birds.json');
  }
  getQuestions(): Observable<any> {
    return this.http.get<any>('assets/data/questions.json');
  }
}