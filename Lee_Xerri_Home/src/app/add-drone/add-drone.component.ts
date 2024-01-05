import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DroneAddUpdate } from '../dto/drone-add-update.dto';
import { DroneService } from '../services/drone.service';
import { Drone } from '../dto/drone.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drone',
  templateUrl: './add-drone.component.html',
  styleUrls: ['./add-drone.component.css']
})
export class AddDroneComponent implements OnInit{
  droneForm!: FormGroup;
  submitted: boolean = false;

  constructor (private formBuilder: FormBuilder, private droneService: DroneService, private router: Router)
  {
    this.droneForm = this.formBuilder.group({
      serialNumber: ['', Validators.required],
      modelId: ['', Validators.required],
      ownerIdCardNumber: ['', Validators.required],
      ownerFirstName: ['', Validators.required],
      ownerLastName: ['', Validators.required],
      ownerContactNumber: ['', Validators.required],
      ownerEmailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.droneForm = this.formBuilder.group({
      id: [null],
      serialNumber: ['', Validators.required],
      modelId: ['', Validators.required],
      ownerIdCardNumber: ['', [Validators.required, this.validIdCard]],
      ownerFirstName: ['', Validators.required],
      ownerLastName: ['', Validators.required],
      ownerContactNumber: ['', [Validators.required, this.validContactNumber]],
      ownerEmailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  validIdCard(control: any) {
    const pattern = /^[0-9]+\s*[A-Za-z]$/;
    return pattern.test(control.value) ? null : { ownerIdCardNumber: true };
  }

  validContactNumber(control: any) {
    const pattern = /^[0-9]+$/;
    const value = control.value;

    return pattern.test(value) && +value >= 0 && value.length >= 8 ? null : { ownerContactNumber: true };
  }

  hasError(controlName: string, errorName: string) {
    return this.droneForm.controls[controlName].hasError(errorName);
  }

  submitForm()
  {
    this.submitted = true;
    
    if (this.droneForm.valid) {
      let drone:DroneAddUpdate = this.droneForm.value;
      console.log(JSON.stringify(drone));

      this.droneService.addDrone(drone).subscribe((res: Drone) => {
        console.log(JSON.stringify(res));
      });

      this.router.navigate(['/drones']);
    }
  }
}
