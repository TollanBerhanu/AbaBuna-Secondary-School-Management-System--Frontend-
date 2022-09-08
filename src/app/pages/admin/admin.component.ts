import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Dashboard {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit { 
  dashboard: Dashboard[];
  dashboardTitle: string[];

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    switch(this.currentRoute.snapshot.url.toString()){
      case 'teacher': this.dashboardTitle = ['View Teacher Profiles', 'Register Teacher', 'Modify Teacher']; break;
      case 'student': this.dashboardTitle = ['View Student Profiles', 'Register Student', 'Modify Student']; break;
      case 'subject': this.dashboardTitle = ['View All Subjects', 'Register New Subject', 'Modify Subject']; break;
      case 'class': this.dashboardTitle = ['View All Classes', 'Register New Class', 'Modify Class']; break;
    }
    this.dashboard = [
      { path: 'view', title: this.dashboardTitle[0] , icon:'', class: '' },
      { path: 'register', title: this.dashboardTitle[1] , icon:'', class: '' },
      { path: 'delete', title: this.dashboardTitle[2] , icon:'', class: '' },
    ];
  }

}
