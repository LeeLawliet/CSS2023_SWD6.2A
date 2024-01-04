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

  ngOnInit(): void{
    this.droneForm = this.formBuilder.group ({
        id: null,
        serialNumber: ['', [Validators.required]],
        modelId: ['', [Validators.required]],
        ownerIdCardNumber: ['', [Validators.required]],
        ownerFirstName: ['', [Validators.required]],
        ownerLastName: ['', [Validators.required]],
        ownerContactNumber: ['', [Validators.required]],
        ownerEmailAddress: ['', [Validators.required, Validators.email]],
    })
  }

  submitForm()
  {
    let drone:DroneAddUpdate = this.droneForm.value;
    console.log(JSON.stringify(drone));

    this.droneService.addDrone(drone).subscribe((res: Drone) => {
      console.log(JSON.stringify(res));
    });

    this.router.navigate(['/drones']);
  }
}
