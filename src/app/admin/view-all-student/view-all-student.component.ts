import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { ViewAllStudentService } from './view-all-student.service';

@Component({
  selector: 'view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css',
    '../student-add/student-add.component.css'
  ]
})


export class ViewAllStudentComponent implements OnInit {

  students: Student[] = [];
  msg: string;

  maleStudents: Student[] = [];
  broneRoomsMaleStudents: Student[] = [];
  brtwoRoomsMaleStudents: Student[] = [];
  brtreeRoomsMaleStudents: Student[] = [];
  brfourRoomsMaleStudents: Student[] = [];
  brfiveRoomsMaleStudents: Student[] = [];
  brsixRoomsMaleStudents: Student[] = [];
  brsevenRoomsMaleStudents: Student[] = [];
  breightRoomsMaleStudents: Student[] = [];
  brnineRoomsMaleStudents: Student[] = [];
  brtenRoomsMaleStudents: Student[] = [];

  femaleStudents: Student[] = [];
  groneRoomsFemaleStudents: Student[] = [];
  grtwoRoomsFemaleStudents: Student[] = [];
  grtreeRoomsFemaleStudents: Student[] = [];
  grfourRoomsFemaleStudents: Student[] = [];
  grfiveRoomsFemaleStudents: Student[] = [];
  grsixRoomsFemaleStudents: Student[] = [];
  grsevenRoomsFemaleStudents: Student[] = [];
  greightRoomsFemaleStudents: Student[] = [];
  grnineRoomsFemaleStudents: Student[] = [];
  grtenRoomsFemaleStudents: Student[] = [];
  grelevenRoomsFemaleStudents: Student[] = [];
  grtwelveRoomsFemaleStudents: Student[] = [];
  grthirteenRoomsFemaleStudents: Student[] = [];
  grfourteenRoomsFemaleStudents: Student[] = [];
  grfifteenRoomsFemaleStudents: Student[] = [];

  searchRooms: Student[] = [];
  searchIsDone: boolean = false;
  searchmsg: string = "No Student Found!!";

  rNoForSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required])
  });

  constructor(private viewAllStudentService: ViewAllStudentService, private router: Router) 
  { 
    this.viewAllStudentService.findStudent()
    .subscribe((studentsDetail) => {
        this.students = studentsDetail;
        this.students.sort((a, b) => (a.roomNo > b.roomNo) ? 1 : -1);
        this.students = this.students.filter(a=> a.isStatus !== false);
        
        this.femaleStudents = this.students.filter(a=> a.gender == "female");
        this.groneRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grone");
        this.grtwoRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grtwo");
        this.grtreeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grtree");
        this.grfourRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grfour");
        this.grfiveRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grfive");
        this.grsixRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grsix");
        this.grsevenRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grseven");
        this.greightRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Greight");
        this.grnineRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grnine");
        this.grtenRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grten");
        this.grelevenRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Greleven");
        this.grtwelveRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grtwelve");
        this.grthirteenRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grthirteen");
        this.grfourteenRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grfourteen");
        this.grfifteenRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Grfifteen");
      

        this.maleStudents = this.students.filter(a=> a.gender == "male");
        this.broneRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brone");
        this.brtwoRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brtwo");
        this.brtreeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brtree");
        this.brfourRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brfour");
        this.brfiveRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brfive");
        this.brsixRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brsix");
        this.brsevenRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brseven");
        this.breightRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Breight");
        this.brnineRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brnine");
        this.brtenRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Brten");
      
        this.msg = 'There is not a single student';
      }
    );
  }

  ngOnInit(): void {
  }

  searchRoomNo() 
  {
    this.searchIsDone = false;
    if(!this.rNoForSearch.valid) {
      alert('please enter roomNo');
      return;
    }
    const roomNoDetails = this.rNoForSearch.getRawValue();
    this.searchRooms = this.students.filter(a => a.roomNo == roomNoDetails.rNo);
    this.searchIsDone = true;
  }

  get rNo() {
    return this.rNoForSearch.get('rNo');
  }

}
