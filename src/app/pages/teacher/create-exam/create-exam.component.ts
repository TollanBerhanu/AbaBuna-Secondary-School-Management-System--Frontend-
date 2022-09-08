import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  @ViewChild('examForm') examForm: NgForm

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.examForm.value)
    /* this.api.registerExam(this.examForm.value).subscribe((res) => {
      alert('Question Registered')
    }) */
  }

}
