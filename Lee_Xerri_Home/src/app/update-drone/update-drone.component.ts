import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DroneAddUpdate } from '../dto/drone-add-update.dto';
import { DroneService } from '../services/drone.service';
import { Drone } from '../dto/drone.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-drone',
  templateUrl: './update-drone.component.html',
  styleUrls: ['./update-drone.component.css']
})
export class UpdateDroneComponent implements OnInit{
  droneForm!: FormGroup;
  droneId: number = +this.route.snapshot.paramMap.get('id')!;

  constructor (private formBuilder: FormBuilder, private droneService: DroneService, private router: Router, private route: ActivatedRoute, private authService: AuthService)
  {

  }

  ngOnInit(): void{
    this.droneForm = this.formBuilder.group({
      serialNumber: [''],
      brandName: [''],
      modelId: [''],
      ownerIdCardNumber: [''],
      ownerFirstName: [''],
      ownerLastName: [''],
      ownerContactNumber: [''],
      ownerEmailAddress: ['']
    });

    this.loadDroneDetails();
  }

  loadDroneDetails(): void {

    if (!isNaN(this.droneId))
    {
      this.droneService.getDroneById(this.droneId).subscribe((droneDetails: Drone) => {
        this.droneForm.patchValue(droneDetails);
      });
    }else {
      console.error('Invalid drone ID'); // Log an error or take appropriate action
    }
    
  }

  submitForm()
  {
    let drone:DroneAddUpdate = this.droneForm.value;
    console.log(JSON.stringify(drone));

    this.droneService.updateDrone(this.droneId, drone).subscribe((res: Drone) => {
      console.log(JSON.stringify(res));
    });

    this.router.navigate(['/drones']);
  }
}
