import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'hostel-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private apiUrl = 'http://localhost:4050/api/contactUs/';
  user: User;

  contactHistory: any = [];
  replyMsgList : any = []; 
  totalReplyMsg : number = 0;

  contactFormGroup = new FormGroup({
    surname : new FormControl('',[Validators.required]),
    firstname : new FormControl('',[Validators.required]),
    middlename : new FormControl('',[Validators.required]),
    course : new FormControl('',[Validators.required]),
    idnumber : new FormControl('',[Validators.required]),
    citizenship : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required]),
    birthday : new FormControl('',[Validators.required]),
    religion : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    contact : new FormControl('',[Validators.required,  Validators.pattern("[0-9]{1}[0-9]{10}")]),
    scholar : new FormControl('',[Validators.required]),
    elementary : new FormControl('',[Validators.required]),
    secondary : new FormControl('',[Validators.required]),
    college : new FormControl('',[Validators.required]),
    fathersname : new FormControl('',[Validators.required]),
    mothersname : new FormControl('',[Validators.required]),
    occupation : new FormControl('',[Validators.required]),
    monthly : new FormControl('',[Validators.required]),
    person : new FormControl('',[Validators.required]),
    relationship : new FormControl('',[Validators.required]),
    contacts : new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthService, private router: Router, private contactService: ContactUsService) 
  { 
    this.authService.findMe().subscribe(user =>(this.user = user));
    this.showHistory();

    this.contactService.replyMessageHistory().subscribe((contactReplyHistory) => { 
      this.replyMsgList = contactReplyHistory.filter((a: { username: string; }) => a.username == this.user.username);
      this.totalReplyMsg = this.replyMsgList.length;
    });
  }

  contactFormSubmit() {
    if(!this.contactFormGroup.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    const contactForm = this.contactFormGroup.getRawValue();
    contactForm.username = this.user.username;
    // console.log(contactForm);
    this.contactService.insertContactForm(contactForm).subscribe(s => {
      alert(s);
      this.router.navigate(['/']);
    } );
  }

  showHistory() {
    // console.log('showHistory');
    this.contactService.showHistory()
    .subscribe((contactHistory) => {
        this.contactHistory = contactHistory;
        this.contactHistory = this.contactHistory.filter((item: { username: string; }) => (item.username == this.user.username));
        // console.log(this.contactHistory);
      }
    );
  }

  ngOnInit(): void {
  }

}
