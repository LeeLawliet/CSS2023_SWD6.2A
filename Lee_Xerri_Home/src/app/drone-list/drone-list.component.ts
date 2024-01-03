import { Component, OnInit } from '@angular/core';
import { Drone } from '../dto/drone.dto';
import { DroneAddUpdate } from '../dto/drone-add-update.dto';
import { DroneService } from '../services/drone.service';
import { filter } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit{

  constructor(private droneService: DroneService, private route: ActivatedRoute, private router: Router) {

  }
  
  ngOnInit(): void {
    this.initialiseDrones();
  }

  title: string = "Drone Registration";
  eventMessage: string = "";
  drones: Drone[] = [];

  colour: string = "green";
  imageWidth: number = 40;
  imageMargin: number = 2;
  areImagesVisible: boolean = true;

  getTitle(): string {
    return this.title;
  }

  toggleImages(): void {
    this.areImagesVisible = !this.areImagesVisible;
  }

  initialiseDrones(): void {
    this.droneService.getDrones().subscribe((res: Drone[]) => {
      this.drones = res;
    });
  }

  updateDrone(id: number, drone: Drone){
    this.router.navigate(['/drones/update', id], { state: {droneDetails: drone}})
  }

  deleteDrone(id: number): void {
      if(confirm("Are you sure you want to delete drone with ID " + id + "?"))
      {
        this.droneService.deleteDrone(id).subscribe((res: Drone[]) => {
          this.drones = res;
        });

        this.initialiseDrones();
      }
  }

  onNotify(message: string) {
    console.log(message);
    this.eventMessage = message;
  }
}
