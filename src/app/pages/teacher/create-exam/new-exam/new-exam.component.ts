import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css']
})
export class NewExamComponent implements OnInit {
  @ViewChild('examForm') examForm: NgForm

  examname = ''
  exam = [{
    question: '',
    choicea: '',
    choiceb: '',
    choicec: '',
    choiced: '',
    answer: ''
  }]
  i = 0 // index
  classes = [] // retrieved teacher's classes from db
  selectedclass = [] // checkboxes that are selected will have a value of true
  classesgiven = [] // selected classes will be stored here

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    /* this.api.getOneTeacher('').subscribe((res: any) => {
      this.classes = res.data.classes
    }) */
  }

  addQuestion(){
    this.exam.push({
      question: '',
      choicea: '',
      choiceb: '',
      choicec: '',
      choiced: '',
      answer: ''
    })
    this.i = this.exam.length-1
  }
  deleteQuestion(){
    this.exam.splice(this.i, 1)
    if(this.i == this.exam.length) this.i--
  }

  previous(){this.i--}
  next(){this.i++}

  save(){
    this.classes.forEach((cls, i) => { // Stores the selected classes in the 'classesgiven' array
      if(this.selectedclass[i] == true) this.classesgiven[i] = cls
    })
    console.log(this.exam)
    /* this.api.registerExam({ examname: this.examname, exam: this.exam, classes: this.classesgiven }).subscribe((res: any) => {
      alert('Exam registered!')
    }) */
  }

  onSubmit(){
    console.log(this.examForm.value)
    /* this.api.registerExam(this.examForm.value).subscribe((res) => {
      alert('Exam Registered')
    }) */
  }

}