import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-generate-id',
  templateUrl: './generate-id.component.html',
  styleUrls: ['./generate-id.component.css']
})
export class GenerateIdComponent implements OnInit {
  classes = []
  selectedStudents = []
  selectedClass

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllClasses().subscribe((res: any) => {
      this.classes = res
      console.log(res)
    })
  }

  onClassSelected(cls){
    this.api.getClassStudents({ class: cls.value }).subscribe((res: any) => {
      console.log(res)
      this.selectedStudents = res
    })
    this.selectedClass = cls.grade +''+ cls.section
  }

}
