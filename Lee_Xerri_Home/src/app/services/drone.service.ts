import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Drone } from "../dto/drone.dto";
import { DroneAddUpdate } from "../dto/drone-add-update.dto";
import { AuthService } from "./auth.service";
import { of } from 'rxjs';

@Injectable()
export class DroneService {

    endpoint: string = "http://localhost:8080/api/registrations";
    token: string | null = "";

    constructor(private httpClient: HttpClient, private authService: AuthService) {
        
    }

    private getHeaders(): HttpHeaders {
        this.token = this.authService.getAccessToken();
        return new HttpHeaders({
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        });
    }

    getDrones(): Observable<Drone[]> {
        return this.httpClient.get<Drone[]>(this.endpoint, { headers: this.getHeaders() });
    }

    getDroneById(id: number): Observable<Drone> {
        return this.httpClient.get<Drone>(this.endpoint + "/" + id, { headers: this.getHeaders() });
    } 

    addDrone(droneToAdd: DroneAddUpdate): Observable<Drone> {
        return this.httpClient.post<Drone>(this.endpoint, droneToAdd, { headers: this.getHeaders() })
        .pipe(
            catchError((error: HttpErrorResponse) : Observable<Drone> => {
                window.alert('Error: Problem adding drone, check your entries.');
                return of();
            })
        );;
        
    }

    updateDrone(id: number, droneToUpdate: DroneAddUpdate): Observable<Drone> {
        return this.httpClient.patch<Drone>(this.endpoint + "/" + id, droneToUpdate, { headers: this.getHeaders() })
        .pipe(
            catchError((error: HttpErrorResponse) : Observable<Drone> => {
                window.alert('Error: Problem updating drone, check your entries.');
                return of();
            })
        );
    }

    deleteDrone(id: number): Observable<any> {
        return this.httpClient.delete(this.endpoint + "/" + id, { headers: this.getHeaders() });
    }
}