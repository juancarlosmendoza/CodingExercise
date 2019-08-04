import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../model/publication';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  url = 'http://localhost:3000/Publicacion';

  constructor(
    private http: HttpClient,
  ) { }

  getPublication(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.url);
  }

  getPublicationById(id: number) {
    return this.http.get(this.url + id);
  }

  postPublicacion(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.url, publication);
  }

  putPublicacion(id: number, publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(this.url + '/' + id, publication);
  }

  deletePublicacion(id: string): Observable<Publication> {
      return this.http.delete<Publication>(this.url + '/' + id);
  }
}
