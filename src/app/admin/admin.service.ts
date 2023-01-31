import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, toArray } from 'rxjs/operators';
import { EMPTY, of, throwError } from 'rxjs';
import { Student } from '../../app/student';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:4050/api/student/';

  constructor(private httpClient: HttpClient, private router: Router) { }

  addStudent(studentToSave: Student) {
    return this.httpClient.post<any>(`${this.apiUrl}addStudent`,studentToSave).pipe
    (
      switchMap(({ student, msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(err => {
        // console.log(`server error occured`, err);
        const msg = 'Registration failed please contact to admin';
        return of(msg);
      })
    );
  }

  updateStudent(studentToUpdate: any) {
    // console.log(`updating student details`);
    // console.log(studentToUpdate);
    return this.httpClient.post<any>(`${this.apiUrl}updateStudent`,studentToUpdate)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "Student Details not Updated. Please try again";
        return of(error);
      })
    );
  }

  removeStudent(studentToRemove: any) {
    return this.httpClient.post<any>(`${this.apiUrl}removeStudent`, studentToRemove)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "Student Details not Removed. Please try again";
        // console.log(error);
        return of(error);
      })
    );
  }


  boysBroneRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/broneRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 1 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrtwoRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brtwoRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 2 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }


  boysBrtreeRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brtreeRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 3 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrfourRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brfourRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 4 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrfiveRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brfiveRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 5 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrsixRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brsixRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 6 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrsevenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brssevenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 7 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBreightRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/breightRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 8 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrnineRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brnineRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 9 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  boysBrtenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/brtenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 9 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }


  girlsGroneRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/groneRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 1 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrtwoRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grtwoRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 2 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrtreeRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grtreeRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 3 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrfourRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grfourRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 4 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrfiveRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grfiveRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 5 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrsixRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grsixRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 6 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrsevenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grsevenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 7 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }  
  
  girlsGreightRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/greightRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 8 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrnineRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grnineRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 9 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrtenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grtenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 10 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }


  girlsGrelevenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grelevenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 11 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrtwelveRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grtwelveRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 12 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrthirteenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grthirteenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 13 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrfourteenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grfourteenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 14 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }

  girlsGrfifteenRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/grfifteenRooms`).pipe
    (
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Room 15 Details not fetch. Please try again";
        return of(msg);
      })
    );
  }


  findHostelPriceDetails() {
    return this.httpClient.get<any>(`http://localhost:4050/api/prices/findHostelPriceDetails`).pipe
    (
      switchMap(({ price }) => {
        // console.log('found price detalis done ', price);
        return of(price);
      }),
      catchError(err => {
        return throwError(`Your Hostel Price Details not fetch. Please try again`);
      })
    );
  }

  updatePriceDetails(priceDetails: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/prices/updatePriceDetails`,priceDetails)
    .pipe(
      switchMap(({ msg }) => {
        return of(msg);
      }),
      catchError(error => {
        const msg = "Price Details not Updated. Please try again";
        return of(error);
      })
    );
  }

  getAllUsers() {
    return this.httpClient.get<any>(`http://localhost:4050/api/users/AllUser`).pipe
    (
      switchMap(({ users }) => {
        return of(users);
      }),
      catchError(err => {
        return throwError(`Users Details not fetch. Please try again`);
      })
    );
  }

  updateUser(user: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/users/userUpdate`,user)
    .pipe(
      switchMap(({ msg }) => {
        // console.log(msg);
        return of(msg);
      }),
      catchError(error => {
        const msg = "User Details not Updated. Please try again";
        return of(error);
      })
    );
  }

}
