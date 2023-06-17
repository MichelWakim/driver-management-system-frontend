import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import {IDriver} from "../../interfaces/driver";

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  driverForm!: FormGroup;
  editing = false;
  driverId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.driverForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editing = true;
        this.driverId = params['id'];
        this.driverService.getDriver(+this.driverId).subscribe((driver: IDriver) => {
          this.driverForm.setValue({
            firstName: driver.firstName,
            lastName: driver.lastName,
            email: driver.email,
            phoneNumber: driver.phoneNumber
          });
        });
      }
    });
  }

  onSubmit() {
    if (this.editing) {
      this.driverService.updateDriver(+this.driverId,this.driverForm.value).subscribe(() => {
        this.router.navigate(['']);
      });
    } else {
      this.driverService.createDriver(this.driverForm.value).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

}
