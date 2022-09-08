import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-view-all-subjects',
  templateUrl: './view-all-subjects.component.html',
  styleUrls: ['./view-all-subjects.component.css']
})
export class ViewAllSubjectsComponent implements OnInit {
  subjects: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllSubjects().subscribe((res: any) => this.subjects = res)
  }
}
