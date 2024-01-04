import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Drone Registration";
  token: string | null = '';
  bAuthenticated: boolean = false;

  constructor(private authService: AuthService,  private router: Router)
  {
    this.token = authService.getAccessToken();
  }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((bAuthenticated: boolean) => {
      this.bAuthenticated = bAuthenticated;
    })
  }

  isAuthenticated(): boolean{
    return this.bAuthenticated;
  }

  logout(): void{
    if(confirm("Are you sure you want sign out?"))
    {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}