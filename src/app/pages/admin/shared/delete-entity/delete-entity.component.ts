import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-delete-entity',
  templateUrl: './delete-entity.component.html',
  styleUrls: ['./delete-entity.component.css']
})
export class DeleteEntityComponent implements OnInit {

  entities = []
  entityType

  constructor(private api: ApiService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.entityType = this.currentRoute.snapshot.parent.routeConfig.path
    if(this.entityType == 'teacher') this.api.getAllTeachers().subscribe((data: any) => {
      this.entities = data
    })
    else if(this.entityType == 'student') this.api.getAllStudents().subscribe((data: any) => {
      this.entities = data
    })
  }

  onEdit(index){

  }

  onDelete(index){

  }

}
