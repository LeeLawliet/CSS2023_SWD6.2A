import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Employee } from "../dto/emloyee.dto";
import { authRes } from "../dto/authRes.dto";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    endpoint: string = "http://localhost:8080/api/auth";
    private accessToken: string | null = null;

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
            })
        );
    }

    setAccessToken(token: string): void {
        this.accessToken = token;
    }

    getAccessToken(): string | null {
        return this.accessToken;
    }
}