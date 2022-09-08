import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('min') min: NgModel
  @ViewChild('max') max: NgModel

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  
  beginSchoolYear(){
    this.api.startCurrentSchoolYear().subscribe((res: any) => {
      console.log(res)
    })
    alert('School Year Started')
  }

  endSchoolYear(){
    this.api.endCurrentSchoolYear().subscribe((res: any) => {
      console.log(res)
    })
    alert('School Year Ended')
  }

  assignClasses(){
    this.api.assignStudents({min_p_c: this.min.value, max_p_c: this.max.value}).subscribe((res: any) => {
      console.log(res)
    })
  }

  completeRegistration(){
    this.api.completeRegistration().subscribe((res: any) => {
      console.log(res)
    })
  }
}
