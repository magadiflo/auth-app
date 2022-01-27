import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password }
    return this.http.post<AuthResponse>(url, body);
  }

}
