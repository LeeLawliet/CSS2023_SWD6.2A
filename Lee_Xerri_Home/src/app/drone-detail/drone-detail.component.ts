import { Component, OnInit } from '@angular/core';
import { Drone } from '../dto/drone.dto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DroneService } from '../services/drone.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-drone-detail',
  templateUrl: './drone-detail.component.html',
  styleUrls: ['./drone-detail.component.css']
})
export class DroneDetailComponent implements OnInit {

  drone!: Drone;

  constructor(private route: ActivatedRoute, private droneService: DroneService, private authService: AuthService) {}
  
  ngOnInit(): void {    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: string =  params.get("id") as string;
      this.droneService.getDroneById(+id).subscribe((res: Drone) => {
        this.drone = res;
      })
    });
  }
}
