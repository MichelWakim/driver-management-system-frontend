import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDriver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private apiUrl: string = '/api/driver';

  constructor(private http: HttpClient) {}

  getDrivers(sortBy: string | null , sortOrder: string | null, searchTerm: string | null): Observable<IDriver[]> {
    let url = this.apiUrl;
    if (sortBy && sortOrder) {
      url += `?sortBy=${sortBy}&sortOrder=${sortOrder}`;
    }
    if (searchTerm) {
      url += `${sortBy && sortOrder ? '&' : '?'}q=${searchTerm}`;
    }
    return this.http.get<IDriver[]>(url);
  }

  getDriver(id: number): Observable<IDriver> {
    return this.http.get<IDriver>(`${this.apiUrl}/${id}`);
  }

  createDriver(driver: IDriver): Observable<IDriver> {
    return this.http.post<IDriver>(this.apiUrl, driver);
  }

  updateDriver(driverId: number, driver: IDriver): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${driverId}`, driver);
  }

  deleteDriver(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
