import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserResponse } from '../models/user';

const URL_POST='https://mtwdm.lilmonika.info/ws/login';
//const URL_POST='http://localhost:5000/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserResponse>;
    public currentUser: Observable<UserResponse>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserResponse>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserResponse {
        return this.currentUserSubject.value;
    }

    login(username: string, pass: string) {
        var headers = { 'Content-Type': 'application/json' };
        var credentials = { userName: username, password: pass };
        
        return this.http.post<any>(`${URL_POST}`, credentials, {headers})
        .pipe(
            map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}