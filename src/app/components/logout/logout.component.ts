import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
userDetail: any=[];
  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    let userListobj: any = localStorage.getItem("User")//JSON.prase();
    let list = JSON.parse(userListobj);
    this.userDetail= [];
    list.forEach((element: {fname: any; lname: any; email:any;})=>{
      this.userDetail.push({
        fname:element.fname, lname: element.lname, email:element.email
      });
    })
      
    }
    logout(){
      localStorage.clear;
      this.router.navigate(['home']);
    }
  }


