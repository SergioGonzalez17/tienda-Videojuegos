import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  createUser(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/clients_post`, data);
  }

  getHome(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/clients_get${data}`)
  }

  getNameUser(data: any): Observable<any> {
    return this.http.get(`${baseUrl}/clients_get_user${data}`)
  }

  updatePassword(data: any): Observable<any> {
    console.log('data',data);
    
    return this.http.put(`${baseUrl}/clients_put${data.id_client}`, data)
  }

//   getAll(): Observable<any> {
//     return this.http.get(baseUrl);
//   }

//   get(id): Observable<any> {
//     return this.http.get(`${baseUrl}/${id}`);
//   }

//   create(data): Observable<any> {
//     return this.http.post(baseUrl, data);
//   }

//   update(id, data): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }

//   delete(id): Observable<any> {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }

//   deleteAll(): Observable<any> {
//     return this.http.delete(baseUrl);
//   }

//   findByTitle(title): Observable<any> {
//     return this.http.get(`${baseUrl}?title=${title}`);
//   }
}