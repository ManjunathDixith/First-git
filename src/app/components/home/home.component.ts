import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signinForm!: FormGroup;
  form: any;
  today: number = Date.now();

  constructor(
    private formbuilder:FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signinForm=new FormGroup({
      "fname" : new FormControl("", [Validators.required, Validators.minLength(4)]),
      "lname" : new FormControl("", [Validators.required, Validators.minLength(4)]),
      "email" : new FormControl("", [Validators.required, Validators.email]),
      "password" : new FormControl("", [Validators.required, Validators.minLength(8), 
        //Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
      ]),
      "confirmpassword" : new FormControl("", [Validators.required, Validators.minLength(8)]),
      "phnumber" : new FormControl("",  [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  
    //console.log(this.signinForm)
  }
  submitForm(ipl:any){
    let user=this.signinForm.value;
    let userList=[];
    if(ipl.status == 'INVALID'){
      window.alert("Fill the form correctly")
    }
    else{
    userList.push(user);
    localStorage.setItem("User", JSON.stringify(userList));
    //  localStorage.setItem('form',ipl.value);
      this.router.navigate(['/logout'  ])
     }
     console.log(ipl.value)
  }
  get fname(){
    return this.signinForm.get('fname')
  }
  get lname(){
    return this.signinForm.get('lname')
  }
  get email(){
    return this.signinForm.get('email')
  }
  get password(){
    return this.signinForm.get('password')
  }
  get confirmpassword(){
    return this.signinForm.get('confirmpassword')
  }
  get phnumber(){
    return this.signinForm.get('phnumber')
  }
  }



