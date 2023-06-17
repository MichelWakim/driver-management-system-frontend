import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { IDriver } from '../../interfaces/driver';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  drivers: IDriver[] = [];
  sortBy: string | null = null;
  sortOrder: string | null = null;
  searchTerm: string | null = null;

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(): void {
    this.driverService.getDrivers(this.sortBy, this.sortOrder, this.searchTerm).subscribe((drivers) => {
      this.drivers = drivers;
    });
  }

  deleteDriver(driverId: number): void {
    this.driverService.deleteDriver(+driverId ).subscribe(() => {
      this.getDrivers();
    });
  }

  sortDrivers(sortBy: string): void {
    if (sortBy === this.sortBy) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = sortBy;
      this.sortOrder = 'asc';
    }
    this.getDrivers();
  }

  searchDrivers(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.getDrivers();
  }
}
