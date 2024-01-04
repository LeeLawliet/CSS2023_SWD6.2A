import { Component, OnInit } from '@angular/core';
import { Drone } from '../dto/drone.dto';
import { DroneAddUpdate } from '../dto/drone-add-update.dto';
import { DroneService } from '../services/drone.service';
import { filter } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../dto/emloyee.dto';
//import * as XLSX from 'xlsx';
// @ts-ignore
//import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.css']
})
export class DroneListComponent implements OnInit{

  employee: Employee | undefined;
  
  constructor(private droneService: DroneService, private route: ActivatedRoute, private router: Router) {

  }
  
  ngOnInit(): void {
    this.initialiseDrones();
    this.employee = history.state.employee;
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

  isClerk(): boolean {
    return this.employee?.role === 'Clerk';
  }

  isManager(): boolean {
    return this.employee?.role === 'Manager';
  }

  // exportToExcel(fileName: string): void {
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.drones);
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'DroneRegistrations');
  //   XLSX.writeFile(wb, `${fileName}.xlsx`);
  // }

  // exportToPDF(): void {
  //   const content = this.generatePDF();

  //   const options = {
  //     margin: 10,
  //     filename: 'drones-list.pdf',
  //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  //   };

  //   const pdfPromise = (html2pdf as any)().from(content).set(options).outputPdf();

  //   pdfPromise.then((pdfBlob: any) => {
  //     // Create a Blob URL for the PDF blob
  //     const blobUrl = URL.createObjectURL(pdfBlob);

  //     // Create a link element
  //     const link = document.createElement('a');
  //     link.href = blobUrl;
  //     link.download = options.filename;

  //     // Append the link to the document
  //     document.body.appendChild(link);

  //     // Trigger a click on the link to start the download
  //     link.click();

  //     // Remove the link from the document
  //     document.body.removeChild(link);

  //     // Cleanup: Revoke the Blob URL
  //     URL.revokeObjectURL(blobUrl);
  // });
  // }

  // private generatePDF(): HTMLElement {
  //   const container = document.createElement('div');

  //   // Create a table for the drone list
  //   const table = document.createElement('table');
  //   table.style.width = '100%';
  //   table.style.borderCollapse = 'collapse';

  //   // Add table headers
  //   const headers = ['Name', 'Model', 'Manufacturer'];
  //   const headerRow = table.insertRow();
  //   headers.forEach(header => {
  //     const th = document.createElement('th');
  //     th.style.border = '1px solid #dddddd';
  //     th.textContent = header;
  //     headerRow.appendChild(th);
  //   });

  //   // Add table rows with drone information
  //   this.drones.forEach(drone => {
  //     const row = table.insertRow();
  //     Object.values(drone).forEach(value => {
  //       const cell = row.insertCell();
  //       cell.style.border = '1px solid #dddddd';
  //       cell.textContent = value;
  //     });
  //   });

  //   container.appendChild(table);

  //   return container;
  // }
}
