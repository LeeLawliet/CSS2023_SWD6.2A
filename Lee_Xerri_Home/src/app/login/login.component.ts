import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Employee } from '../dto/emloyee.dto';
import { authRes } from '../dto/authRes.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor (private formBuilder: FormBuilder, private authService: AuthService,  private router: Router)
  {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group ({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
    })
  }

  submitForm()
  {
    let employee: Employee = this.loginForm.value;

    this.authService.authenticate(employee).subscribe((res: authRes) => {
      console.log(res.accessToken);
      this.authService.setAccessToken(res.accessToken);
      if (employee.email == 'joe.borg@dronereg.com')
      {
        employee.role = 'Clerk';
      }
      else if (employee.email == 'peter.agius@dronereg.com')
      {
        employee.role = 'Manager';
      }
      else if (employee.email == 'jane.vella@dronereg.com')
      {
        employee.role = 'Admin';
      }

      this.router.navigate(['/drones'], {state: { employee: employee}});
    });
  }
}
