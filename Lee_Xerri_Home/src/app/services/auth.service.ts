import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, of, tap } from "rxjs";
import { Employee } from "../dto/emloyee.dto";
import { authRes } from "../dto/authRes.dto";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    endpoint: string = "https://css.teknologija.com/api/auth";
    private accessToken: string | null = null;
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private httpClient: HttpClient) {
        
    }

    authenticate(employee: Employee): Observable<authRes> {
        return this.httpClient.post<authRes>(this.endpoint, employee, this.httpHeader).pipe(
            tap(response => {
              const accessToken = response.accessToken;
              this.setAccessToken(accessToken);
              this.isAuthenticatedSubject.next(true);
            }),
            (
                catchError((error: HttpErrorResponse) : Observable<authRes> => {
                    window.alert('Error: Problem logging in, check your entries.');
                    return of();
                })
            )   
        );
    }

    logout(): void{
        this.setAccessToken('');
        this.isAuthenticatedSubject.next(false);
    }

    isAuthenticated(): boolean{
        return this.isAuthenticatedSubject.value;
    }
    

    setAccessToken(token: string): void {
        this.accessToken = token;
    }

    getAccessToken(): string | null {
        return this.accessToken;
    }
}