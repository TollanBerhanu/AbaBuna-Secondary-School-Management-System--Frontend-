import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css']
})
export class TakeExamComponent implements OnInit {
  @ViewChild('examForm') examForm: NgForm

  subjects = ['English', 'Afan-Oromo', 'Amharic', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'History', 'Civics', 'ICT', 'HPE']
  started = false
  isLoading = false

  examData: any = []
  selectedExam: any = []
  myAnswers: any = []

  correctCount = 0
  scoreMessage = ''

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  startExam(){ 
    this.started = true
  }

  getExams(subject){
    /* this.api.getExamsBySubject(subject).subscribe((res: any) => {
      this.examData = res.data
      // console.log('Exams: ' + JSON.stringify(res.data))
    }) */
  }

  selectExam(i){
    this.started = false
    this.selectedExam = this.examData[i].exam
    this.correctCount = 0
    this.scoreMessage = ''
    this.examForm.reset()
    console.log('Selected Exam: ' + JSON.stringify(this.examData[i].exam))
  }

  onSubmit(){
    this.correctCount = 0
    this.selectedExam.forEach((qn, i) => {
      document.getElementById(this.myAnswers[i]+i).style.border = '5px solid red'
      document.getElementById(this.myAnswers[i]+'label'+i).style.color = 'red'

      document.getElementById(qn.answer+i).style.border = '5px solid green'
      document.getElementById(qn.answer+'label'+i).style.color = 'green'
      
      if(this.myAnswers[i] == qn.answer) this.correctCount++
    });
    this.scoreMessage = `You got ${this.correctCount} out of ${this.selectedExam.length}!`
  }

}
