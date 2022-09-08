import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { WebRequestService } from './web-request.service';
import { User } from '../models/user.model'
import { HttpClient } from '@angular/common/http';

// The structure of the response from the api after authenticating
interface AuthResponse{
  user: string, // Type of user
  id: string,
  token: string,
  // expiresIn: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //emit (next) a new user every time you log in or when the token expires
  user = new BehaviorSubject<User>(null) // Like subject observable but gives immediate access to the previously emitted value even if not subscribed to it

  constructor(private http: HttpClient) { }

  login(loginData: any, accountType: string){
    return this.http.post(`http://192.168.137.1:3000/api/${accountType}/login`, loginData)
      .pipe(catchError((err, caught):any => {return err}), tap((res: any) => {
        // const expirationDate = new Date(new Date().getTime() + res.expiresIn * 1000) //Convert the expiration date in millisec to a date Object
        const user = new User(res.Token, accountType, res.Name)
        this.user.next(user) // Emit the new user
      }))
  }
}
