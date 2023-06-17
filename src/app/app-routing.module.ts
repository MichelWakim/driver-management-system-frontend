import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DriverListComponent} from "./components/driver-list/driver-list.component";
import {DriverFormComponent} from "./components/driver-form/driver-form.component";

const routes: Routes = [
  { path: '', component: DriverListComponent },
  { path: 'drivers/:id/edit', component: DriverFormComponent },
  { path: 'drivers/add', component: DriverFormComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
