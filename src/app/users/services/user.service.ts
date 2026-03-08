import { UpdateOptions } from './../../../../node_modules/@tailwindcss/node/node_modules/magic-string/dist/magic-string.cjs.d';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private url = environment.URL_USERS_API

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  save(user: User, photoFile: File | null): Observable<User> {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("lastname", user.lastname);
    formData.append("email", user.email);
    formData.append("cellphone", user.cellphone);
    formData.append("age", user.age.toString());
    if (photoFile != null) {
      formData.append("file", photoFile);
    }

    return this.http.post<User>(this.url, formData);
  }

  update(user: User, photoFile: File | null): Observable<User> {
    const formData = new FormData();
    formData.append("id", user.id.toString());
    formData.append("name", user.name);
    formData.append("lastname", user.lastname);
    formData.append("email", user.email);
    formData.append("cellphone", user.cellphone);
    formData.append("age", user.age.toString());
    if (photoFile != null) {
      formData.append("file", photoFile);
    }

    return this.http.put<User>(`${this.url}/${user.id}`, formData);
  }

}
