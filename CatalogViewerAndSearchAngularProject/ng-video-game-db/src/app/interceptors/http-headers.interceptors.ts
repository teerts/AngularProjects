import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

intercept(
    req: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
               'token': `${env.RAWG_RAPIDAPI_KEY}`,
               'Content-Type': 'application/json'               
            },
            setParams: {
                key: `${env.RAWG_RAPIDAPI_KEY}`,
            }
        });
        return next.handle(req);
    }
}