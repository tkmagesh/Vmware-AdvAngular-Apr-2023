import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bug } from '../models/bug';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugApiService {

  constructor(private httpClient : HttpClient) { 

  }

  getAll() : Observable<Bug[]>{
    return this.httpClient.get<Bug[]>('http://localhost:3000/bugs')
  }

  save(bugData : Bug) : Observable<Bug> {
    if (bugData.id === 0 ){
      return this.httpClient.post<Bug>('http://localhost:3000/bugs', bugData)
    } else {
      return this.httpClient.put<Bug>(`http://localhost:3000/bugs/${bugData.id}`, bugData)
    }
  }

  remove(bugData : Bug) : Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:3000/bugs/${bugData.id}`)
  }
}
