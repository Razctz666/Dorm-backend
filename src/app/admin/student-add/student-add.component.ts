import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../../app/student';
import { AdminService } from '../admin.service';

@Component({
  selector: 'hostel-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student: Student;
  roomNo: number[] = [];
  showRoomNo: boolean;
// Room Details
  boysBrtwoRooms: any[];
  boysBroneRooms: any[];
  boysBrtreeRooms: any[];
  boysBrfourRooms: any[];
  boysBrfiveRooms: any[];
  boysBrsixRooms: any[];
  boysBrsevenRooms: any[];
  boysBreightRooms: any[];
  boysBrnineRooms: any[];
  boysBrtenRooms: any[];
  girlsGroneRooms: any[];
  girlsGrtwoRooms: any[];
  girlsGrtreeRooms: any[];
  girlsGrfourRooms: any[];
  girlsGrfiveRooms: any[];
  girlsGrsixRooms: any[];
  girlsGrsevenRooms: any[];
  girlsGreightRooms: any[];
  girlsGrnineRooms: any[];
  girlsGrtenRooms: any[];
  girlsGrelevenRooms: any[];
  girlsGrtwelveRooms: any[];
  girlsGrthirteenRooms: any[];
  girlsGrfourteenRooms: any[];
  girlsGrfifteenRooms: any[];
// Room No 
  boysBroneRoomNo: number[] = [];
  boysBrtwoRoomNo: number[] = [];
  boysBrtreeRoomNo: number[] = [];
  boysBrfourRoomNo: number[] = [];
  boysBrfiveRoomNo: number[] = [];
  boysBrsixRoomNo: number[] = [];
  boysBrsevenRoomNo: number[] = [];
  boysBreightRoomNo: number[] = [];
  boysBrnineRoomNo: number[] = [];
  boysBrtenRoomNo: number[] = [];
  girlsGroneRoomNo: number[] = [];
  girlsGrtwoRoomNo: number[] = [];
  girlsGrtreeRoomNo: number[] = [];
  girlsGrfourRoomNo: number[] = [];
  girlsGrfiveRoomNo: number[] = [];
  girlsGrsixRoomNo: number[] = [];
  girlsGrsevenRoomNo: number[] = [];
  girlsGreightRoomNo: number[] = [];
  girlsGrnineRoomNo: number[] = [];
  girlsGrtenRoomNo: number[] = [];
  girlsGrelevenRoomNo: number[] = [];
  girlsGrtwelveRoomNo: number[] = [];
  girlsGrthirteenRoomNo: number[] = [];
  girlsGrfourteenRoomNo: number[] = [];
  girlsGrfifteenRoomNo: number[] = [];



  studentDetails = new FormGroup({
    roomCategory : new FormControl('',[Validators.required]),
    roomNo: new FormControl('',[Validators.required]),
    surName: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    middleName: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    currentAdress: new FormControl('',[Validators.required]),
    collegeName: new FormControl('',[Validators.required])
  });

  constructor(private router: Router, private adminService: AdminService) {
    // console.log(this.studentDetails);
   
    this.adminService.boysBrtwoRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrtwoRoomNo = this.boysBrtwoRoomNo.concat(i.roomNo);
      }
      this.boysBrtwoRooms = total;
    });

    this.adminService.boysBroneRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBroneRoomNo = this.boysBroneRoomNo.concat(i.roomNo);
      }
      this.boysBroneRooms = total;
    });

    this.adminService.boysBrtreeRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrtreeRoomNo = this.boysBrtreeRoomNo.concat(i.roomNo);
      }
      this.boysBrtreeRooms = total;
    });

    this.adminService.boysBrfourRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrfourRoomNo = this.boysBrfourRoomNo.concat(i.roomNo);
      }
      this.boysBrfourRooms = total;
    });

    this.adminService.boysBrfiveRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrfiveRoomNo = this.boysBrfiveRoomNo.concat(i.roomNo);
      }
      this.boysBrfiveRooms = total;
    });

    this.adminService.boysBrsixRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrsixRoomNo = this.boysBrsixRoomNo.concat(i.roomNo);
      }
      this.boysBrsixRooms = total;
    });

    this.adminService.boysBrsevenRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrsevenRoomNo = this.boysBrsevenRoomNo.concat(i.roomNo);
      }
      this.boysBrsevenRooms = total;
    });

    this.adminService.boysBreightRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBreightRoomNo = this.boysBreightRoomNo.concat(i.roomNo);
      }
      this.boysBreightRooms = total;
    });

    this.adminService.boysBrnineRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrnineRoomNo = this.boysBrnineRoomNo.concat(i.roomNo);
      }
      this.boysBrnineRooms = total;
    });

    this.adminService.boysBrtenRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysBrtenRoomNo = this.boysBrtenRoomNo.concat(i.roomNo);
      }
      this.boysBrtenRooms = total;
    });


    this.adminService.girlsGroneRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsGroneRoomNo = this.girlsGroneRoomNo.concat(i.roomNo);
      }
      this.girlsGroneRooms = total;
    });

    this.adminService.girlsGrtwoRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsGrtwoRoomNo = this.girlsGrtwoRoomNo.concat(i.roomNo);
      }
      this.girlsGrtwoRooms = total;
    });

    this.adminService.girlsGrtreeRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsGrtreeRoomNo = this.girlsGrtreeRoomNo.concat(i.roomNo);
      }
      this.girlsGrtreeRooms = total;
    });

    this.adminService.girlsGrfourRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsGrfourRoomNo = this.girlsGrfourRoomNo.concat(i.roomNo);
      }
      this.girlsGrfourRooms = total;
    });
  

  this.adminService.girlsGrfiveRooms().subscribe((total) => { 
    for (let i of total) {
      this.girlsGrfiveRoomNo = this.girlsGrfiveRoomNo.concat(i.roomNo);
    }
    this.girlsGrfiveRooms = total;
  });


  this.adminService.girlsGrsixRooms().subscribe((total) => { 
  for (let i of total) {
    this.girlsGrsixRoomNo = this.girlsGrsixRoomNo.concat(i.roomNo);
  }
  this.girlsGrsixRooms = total;
  });


  this.adminService.girlsGrsevenRooms().subscribe((total) => { 
  for (let i of total) {
    this.girlsGrsevenRoomNo = this.girlsGrsevenRoomNo.concat(i.roomNo);
  }
  this.girlsGrsevenRooms = total;
  });


  this.adminService.girlsGreightRooms().subscribe((total) => { 
  for (let i of total) {
    this.girlsGreightRoomNo = this.girlsGreightRoomNo.concat(i.roomNo);
  }
  this.girlsGreightRooms = total;
  });

  this.adminService.girlsGrnineRooms().subscribe((total) => { 
    for (let i of total) {
      this.girlsGrnineRoomNo = this.girlsGrnineRoomNo.concat(i.roomNo);
    }
    this.girlsGrnineRooms = total;
    });

    this.adminService.girlsGrtenRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsGrtenRoomNo = this.girlsGrtenRoomNo.concat(i.roomNo);
      }
      this.girlsGrtenRooms = total;
      });

      this.adminService.girlsGrelevenRooms().subscribe((total) => { 
        for (let i of total) {
          this.girlsGrelevenRoomNo = this.girlsGrelevenRoomNo.concat(i.roomNo);
        }
        this.girlsGrelevenRooms = total;
        });

        this.adminService.girlsGrtwelveRooms().subscribe((total) => { 
          for (let i of total) {
            this.girlsGrtwelveRoomNo = this.girlsGrtwelveRoomNo.concat(i.roomNo);
          }
          this.girlsGrtwelveRooms = total;
          });

          this.adminService.girlsGrthirteenRooms().subscribe((total) => { 
            for (let i of total) {
              this.girlsGrthirteenRoomNo = this.girlsGrthirteenRoomNo.concat(i.roomNo);
            }
            this.girlsGrthirteenRooms = total;
            });

            this.adminService.girlsGrfourteenRooms().subscribe((total) => { 
              for (let i of total) {
                this.girlsGrfourteenRoomNo = this.girlsGrfourteenRoomNo.concat(i.roomNo);
              }
              this.girlsGrfourteenRooms = total;
              });

              this.adminService.girlsGrfifteenRooms().subscribe((total) => { 
                for (let i of total) {
                  this.girlsGrfifteenRoomNo = this.girlsGrfifteenRoomNo.concat(i.roomNo);
                }
                this.girlsGrfifteenRooms = total;
                });
}

  ngOnInit(): void {
  }

  genderOrRoomCatSelected() {
    if(this.studentDetails.getRawValue().gender != "" && this.studentDetails.getRawValue().roomCategory != "") 
    {
      this.showRoomNo = false;
      this.roomNo = [];
      if(this.studentDetails.getRawValue().gender == "male")
      {
        var roomCat = this.studentDetails.getRawValue().roomCategory;
        if(roomCat == "Brone")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBroneRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brtwo")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrtwoRoomNo);
          this.showRoomNo = true;
        } 
        if(roomCat == "Brtree")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrtreeRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brfour")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrfourRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brfive")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrfiveRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brsix")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrsixRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brseven")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrsevenRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Breight")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBreightRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brnine")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrnineRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Brten")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysBrtenRoomNo);
          this.showRoomNo = true;
        }
      }
      
      

      if(this.studentDetails.getRawValue().gender == "female")
      {
        var roomCat = this.studentDetails.getRawValue().roomCategory;
        if(roomCat == "Grone")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGroneRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grtwo")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrtwoRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grtree")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrtreeRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grfour")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrfourRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grfive")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrfiveRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grsix")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrsixRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grseven")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrsevenRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Greight")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGreightRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grnine")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrnineRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grten")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrtenRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Greleven")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrelevenRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grtwelve")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrtwelveRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grthirteen")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrthirteenRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grfourteen")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrfourteenRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "Grfifteen")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsGrfourRoomNo);
          this.showRoomNo = true;
        }
      }
    }
  }

  addStudent() {
    if(!this.studentDetails.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    // console.log(this.studentDetails);
    const student = this.studentDetails.getRawValue();
    let roomDetail = this.boysBroneRooms.find(({ roomNo }) => roomNo == student.roomNo);
    if(roomDetail == null) {
      roomDetail = this.boysBrtwoRooms.find(({ roomNo }) => roomNo == student.roomNo);
        if(roomDetail == null) {
          roomDetail = this.boysBrtreeRooms.find(({ roomNo }) => roomNo == student.roomNo);
          if(roomDetail == null) {
            roomDetail = this.boysBrfourRooms.find(({ roomNo }) => roomNo == student.roomNo);
            if(roomDetail == null) {
              roomDetail = this.boysBrfiveRooms.find(({ roomNo }) => roomNo == student.roomNo);
              if(roomDetail == null) {
                roomDetail = this.boysBrsixRooms.find(({ roomNo }) => roomNo == student.roomNo);
                if(roomDetail == null) {
                roomDetail = this.boysBrsevenRooms.find(({ roomNo }) => roomNo == student.roomNo);
                if(roomDetail == null) {
                  roomDetail = this.boysBreightRooms.find(({ roomNo }) => roomNo == student.roomNo);
                  if(roomDetail == null) {
                    roomDetail = this.boysBrnineRooms.find(({ roomNo }) => roomNo == student.roomNo);
                    if(roomDetail == null) {
                      roomDetail = this.boysBrtenRooms.find(({ roomNo }) => roomNo == student.roomNo);
        if(roomDetail == null) {
          roomDetail = this.girlsGroneRooms.find(({ roomNo }) => roomNo == student.roomNo);
          if(roomDetail == null) {
            roomDetail = this.girlsGrtwoRooms.find(({ roomNo }) => roomNo == student.roomNo);
            if(roomDetail == null) {
              roomDetail = this.girlsGrtreeRooms.find(({ roomNo }) => roomNo == student.roomNo);
              if(roomDetail == null) {
                roomDetail = this.girlsGrfourRooms.find(({ roomNo }) => roomNo == student.roomNo);
                if(roomDetail == null) {
                  roomDetail = this.girlsGrfiveRooms.find(({ roomNo }) => roomNo == student.roomNo);
                  if(roomDetail == null) {
                    roomDetail = this.girlsGrsixRooms.find(({ roomNo }) => roomNo == student.roomNo);
                    if(roomDetail == null) {
                      roomDetail = this.girlsGrsevenRooms.find(({ roomNo }) => roomNo == student.roomNo);
                      if(roomDetail == null) {
                        roomDetail = this.girlsGreightRooms.find(({ roomNo }) => roomNo == student.roomNo);
                        if(roomDetail == null) {
                          roomDetail = this.girlsGrnineRooms.find(({ roomNo }) => roomNo == student.roomNo);
                          if(roomDetail == null) {
                            roomDetail = this.girlsGrtenRooms.find(({ roomNo }) => roomNo == student.roomNo);
                            if(roomDetail == null) {
                              roomDetail = this.girlsGrelevenRooms.find(({ roomNo }) => roomNo == student.roomNo);
                              if(roomDetail == null) {
                                roomDetail = this.girlsGrtwelveRooms.find(({ roomNo }) => roomNo == student.roomNo);
                                if(roomDetail == null) {
                                  roomDetail = this.girlsGrthirteenRooms.find(({ roomNo }) => roomNo == student.roomNo);
                                  if(roomDetail == null) {
                                    roomDetail = this.girlsGrfourteenRooms.find(({ roomNo }) => roomNo == student.roomNo);
                                    if(roomDetail == null) {
                                      roomDetail = this.girlsGrfifteenRooms.find(({ roomNo }) => roomNo == student.roomNo);
              if(roomDetail == null) {
                alert("error");
                return;
              }
            }}}}}}}}}}}}
            }
          }
        }
            }
           }
          }
        }
        }
      }
    }
  }
  }
    student.personNo = roomDetail.personNo;
    // console.log(student);

    this.adminService.addStudent(student).subscribe(s => {
      alert(s);
      this.router.navigate(['/admin/viewStudent']);
    });
}

  get email() {
    return this.studentDetails.get('email');
  } 

  get mobileNo() {
    return this.studentDetails.get('mobileNo');
  } 



}
