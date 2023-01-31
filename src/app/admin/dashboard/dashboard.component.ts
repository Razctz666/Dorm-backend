import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availability } from 'src/app/availability';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin-hostel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  availability: Availability = {
    boysBroneRooms: 0, // 10
    boysBrtwoRooms: 0,  // 15
    boysBrtreeRooms: 0,  // 12
    boysBrfourRooms: 0,  // 12
    boysBrfiveRooms: 0,  // 15
    boysBrsixRooms: 0,  // 12
    boysBrsevenRooms: 0,  // 12
    boysBreightRooms: 0,  // 12
    boysBrnineRooms: 0,  // 12
    boysBrtenRooms: 0,  // 12
    girlsGrtreeRooms: 0, // 13
    girlsGrtwoRooms: 0, // 15
    girlsGroneRooms: 0, // 11
    girlsGrfourRooms: 0, // 11
    girlsGrfiveRooms: 0, // 11
    girlsGrsixRooms: 0, // 11
    girlsGrsevenRooms: 0, // 11
    girlsGreightRooms: 0, // 11
    girlsGrnineRooms: 0, // 11
    girlsGrtenRooms: 0, // 11
    girlsGrelevenRooms: 0, // 11
    girlsGrtwelveRooms: 0, // 11
    girlsGrthirteenRooms: 0, // 11
    girlsGrfourteenRooms: 0, // 11
    girlsGrfifteenRooms: 0 // 11
  };

  constructor(private router: Router, private adminService: AdminService) { 
    this.adminService.boysBroneRooms().subscribe((total) => { this.availability.boysBroneRooms = total.length; });
    this.adminService.boysBrtwoRooms().subscribe((total) => { this.availability.boysBrtwoRooms = total.length; });
    this.adminService.boysBrtreeRooms().subscribe((total) => { this.availability.boysBrtreeRooms = total.length; });
    this.adminService.boysBrfourRooms().subscribe((total) => { this.availability.boysBrfourRooms = total.length; });
    this.adminService.boysBrfiveRooms().subscribe((total) => { this.availability.boysBrfiveRooms = total.length; });
    this.adminService.boysBrsixRooms().subscribe((total) => { this.availability.boysBrsixRooms = total.length; });
    this.adminService.boysBrsevenRooms().subscribe((total) => { this.availability.boysBrsevenRooms = total.length; });
    this.adminService.boysBreightRooms().subscribe((total) => { this.availability.boysBreightRooms = total.length; });
    this.adminService.boysBrnineRooms().subscribe((total) => { this.availability.boysBrnineRooms = total.length; });
    this.adminService.boysBrtenRooms().subscribe((total) => { this.availability.boysBrtenRooms = total.length; });
    this.adminService.girlsGroneRooms().subscribe((total) => { this.availability.girlsGroneRooms = total.length; });
    this.adminService.girlsGrtwoRooms().subscribe((total) => { this.availability.girlsGrtwoRooms = total.length; });
    this.adminService.girlsGrtreeRooms().subscribe((total) => { this.availability.girlsGrtreeRooms = total.length; });
    this.adminService.girlsGrfourRooms().subscribe((total) => { this.availability.girlsGrfourRooms = total.length; });
    this.adminService.girlsGrfiveRooms().subscribe((total) => { this.availability.girlsGrfiveRooms = total.length; });
    this.adminService.girlsGrsixRooms().subscribe((total) => { this.availability.girlsGrsixRooms = total.length; });
    this.adminService.girlsGrsevenRooms().subscribe((total) => { this.availability.girlsGrsevenRooms = total.length; });
    this.adminService.girlsGreightRooms().subscribe((total) => { this.availability.girlsGreightRooms = total.length; });
    this.adminService.girlsGrnineRooms().subscribe((total) => { this.availability.girlsGrnineRooms = total.length; });
    this.adminService.girlsGrtenRooms().subscribe((total) => { this.availability.girlsGrtenRooms = total.length; });
    this.adminService.girlsGrelevenRooms().subscribe((total) => { this.availability.girlsGrelevenRooms = total.length; });
    this.adminService.girlsGrtwelveRooms().subscribe((total) => { this.availability.girlsGrtwelveRooms = total.length; });
    this.adminService.girlsGrthirteenRooms().subscribe((total) => { this.availability.girlsGrthirteenRooms = total.length; });
    this.adminService.girlsGrfourteenRooms().subscribe((total) => { this.availability.girlsGrfourteenRooms = total.length; });
    this.adminService.girlsGrfifteenRooms().subscribe((total) => { this.availability.girlsGrfifteenRooms = total.length; });

  }

  ngOnInit(): void {
  }

}
