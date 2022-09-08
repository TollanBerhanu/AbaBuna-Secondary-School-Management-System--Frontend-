import {  HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()   

export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if(!user) return next.handle(req) 
            const modifiedReq = req.clone({
                setHeaders: {
                  // 'Content-Type' : 'application/json; charset=utf-8',
                  // 'Accept'       : 'application/json',
                  'x-access-token': `${user._token}`
                  // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI4LCJ0eXBlIjoidGVhY2hlciIsImlhdCI6MTYzODc1ODk4NSwiZXhwIjoxNjM5NjIyOTg1fQ.lzCMmknkfKhAs02GpQc9b1XinF6r8PbwZoLIxfs789s'
                },
              })
            return next.handle(modifiedReq) // This observable is swapped with the user obervable once it executes
        }))
    }

}