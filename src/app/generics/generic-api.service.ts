import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IItem } from '../contracts/item';

@Injectable({
  providedIn: 'root'
})
export class GenericApiService<T extends IItem> {
  urlRoot = ''

  constructor(protected  httpClient: HttpClient, urlRoot: String) {
      this.urlRoot
   }

    getItems(): Promise<T[]> {
      return this.httpClient.get<T[]>(this.urlRoot).toPromise()
    }

    getItemById(id: number): Promise<T> {
      return this.httpClient.get<T>(`${this.urlRoot}/${id}`).toPromise()
    }

    patchItem(item: T): Promise<T> {
      return this.httpClient.patch<T>(`${this.urlRoot}/${item.id}`, item).toPromise()
    }
    
    putItem(item: T): Promise<T> {
      return this.httpClient.put<T>(`${this.urlRoot}/${item.id}`, item).toPromise()
    }

    postItem(item: T): Promise<T> {
      return this.httpClient.post<T>(`${this.urlRoot}`, item).toPromise()
    }

    deleteItem(item: T): Promise<T> {
      return this.httpClient.delete<T>(`${this.urlRoot}/${item.id}`).toPromise()
    }
}
