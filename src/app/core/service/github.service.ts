import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUser } from '../models/github-user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://api.github.com/users';

  obtenerUsuario(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiUrl}/${username}`);
  }
}