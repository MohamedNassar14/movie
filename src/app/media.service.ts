import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ 
  providedIn: 'root'
})
export class MediaService {

  constructor(private _HttpClient:HttpClient) { }

  userSearch:any = new BehaviorSubject('');


  getAllTrending(mediaType:string, currentPage:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=&page=${currentPage}`);
  }

  getMediaDetails(mediaType:string, id:number):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=`)
  }

  getSimilar(mediaType:string, id:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=`)
  }

}
