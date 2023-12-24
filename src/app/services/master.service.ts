import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private url = 'https://freeapi.miniprojectideas.com/api/zomato'

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any>{
      return this.http.get<any>(`${this.url}/GetAllFoodCategory`)
  }

  getItemByCategoryId(id:any): Observable<any>{
      return this.http.get<any>(`${this.url}/GetFoodItemByCategory?categoryId=${id}`)
  }
}
