import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { WebRequestService } from 'app/services/web-request.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {

  imgURL:any = './assets/img/NoPicMale.jpg' //Default image path
  rootUrl: string
  teacher: boolean = false
  student: boolean = false
  subject: boolean = false
  class: boolean = false

  accordion = -1

  content = [
    {title: 'Title 1', body: 'Body 1'},
    {title: 'Title 2', body: 'Body 2'},
    {title: 'Title 3', body: 'Body 3'},
    {title: 'Title 4', body: 'Body 4'},
  ]
  
  entities: any = [] //Store entities retrieved from database
  selectedStudents: any = [] //Store students of the selected classroom

  constructor(private currentRoute: ActivatedRoute, private api: ApiService, private webReq: WebRequestService) { }

  ngOnInit(): void {
    //Checks the parent route and decides which blocks in the form to display
    switch(this.currentRoute.snapshot.parent.url.toString()){
      case 'teacher': this.teacher = true; break;
      case 'student': this.student = true; break;
      case 'subject': this.subject = true; break;
      case 'class': this.class = true; break;
    }

    this.rootUrl = this.api.rootURL

    //Populate entities[] based on route
    if(this.teacher) this.api.getAllTeachers().subscribe((res: any) => {
      this.entities = res
    })
    if(this.student) this.api.getAllStudents().subscribe((res: any) => {
      this.entities = res
    })
    if(this.class) this.api.getAllClasses().subscribe((res: any) => {
      this.entities = res
    })
  }

  toggleAccordion(i){
    if(i == this.accordion) this.accordion = -1
    else this.accordion = i
    //Select students by classroom (/students/?class=__)
    // if(this.class) this.api.getClassStudents(this.entities[i].class + this.entities[i].section).subscribe((res: any) => {
    //   // console.log(this.entities[i].class + this.entities[i].section)
    //   this.selectedStudents = res.data
    // })
  }

}
