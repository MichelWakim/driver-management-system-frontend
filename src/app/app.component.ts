import {Component, OnInit} from '@angular/core';
import {DriverService} from "./services/driver.service";
import {IDriver} from "./interfaces/driver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driver-management-system-frontend';
}
