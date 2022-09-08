import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-fill-grades',
  templateUrl: './fill-grades.component.html',
  styleUrls: ['./fill-grades.component.css']
})
export class FillGradesComponent implements OnInit {
  @ViewChild('markTable') markTable: NgForm

  accordion = -1

  isLoading: boolean = true
  isMainLoading: boolean = true
  rowData: any = {}

  students: any = []
  marks: any = []

  allInfo = [] // Store all info
  classes = [] // To get the classes the teacher teaches
  selectedClass = [] // To get the name of students of the class
  selectedScores = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // console.log(JSON.parse('{"hello": "hi"}'))
    this.api.getClassInfo().subscribe((data: any) => {
      this.isMainLoading = false
      this.isLoading = false
      this.allInfo = data
      data.forEach(cls => {
        this.classes.push(cls.grade + cls.section) // Get classes the teacher teaches
      });
    })
  }
  
  toggleAccordion(i){
    if(i == this.accordion) this.accordion = -1
    else this.accordion = i
    //Select students by classroom (/students/?class=__)
    /* this.api.getStudentsByClass(this.classes[i]).subscribe((res: any) => {
      this.isLoading = false
      console.log('From Backend: ' + JSON.stringify(res.data))
      // console.log(this.entities[i].class + this.entities[i].section)
      this.students = res.data
    }) */
    this.selectedClass = this.allInfo[i].st_statuses
    this.allInfo[i].st_statuses.forEach((stud, j) => {
      var scores = stud.scores[0].score_items[0].data
      if(scores == '[]') {
        this.selectedScores[j] = {
          test1: '', test2: '', assignment: '', mid: '', final: ''
        }
      }
      else {
        var scores = JSON.parse(scores)
        var score = {
          test1: scores[0].s_value,
          test2: scores[1].s_value,
          assignment: scores[2].s_value,
          mid: scores[3].s_value,
          final:  scores[4].s_value
        }
        this.selectedScores[j] = score
      }
        
    });
    
    // console.log('Selected Class: ' + this.selectedClass)
   /*  console.log(this.allInfo[i].st_statuses[0].scores[0].score_items[0].data)
    var scores = JSON.parse(this.allInfo[i].st_statuses[0].scores[0].score_items[0].data)
    console.log('Scores: ' + scores)
    if(scores != []) this.selectedScores[i] = scores[0] */
  }


  submitRow(st_stat, test1, test2, assignment, mid, final){
    console.log('asd' + st_stat)
    console.log(`${st_stat.id}, ${st_stat.scores[0].score_items[0].subjectId}, ${st_stat.scores[0].score_items[0].id}, ${test1}, ${test2}, ${assignment}, ${mid}, ${final}`)
    let data_ = [];
    data_.push({name: 'Test 1', a_value: 10, s_value: test1, bonus: 0});
    data_.push({name: 'Test 2', a_value: 10, s_value: test2, bonus: 0});
    data_.push({name: 'Assingment', a_value: 10, s_value: assignment, bonus: 0});
    data_.push({name: 'Mid', a_value: 30, s_value: mid, bonus: 0});
    data_.push({name: 'Final', a_value: 40, s_value: final, bonus: 0});
    var rowData = {
      studentST_Id: st_stat.id,
      subjectId: st_stat.scores[0].score_items[0].subjectId,
      scoreItemId: st_stat.scores[0].score_items[0].id,

      data: data_
    }
    console.log("Row Data: " + JSON.stringify(rowData))
    /* this.api.updateMark(this.rowData, studentId, grade, sem).subscribe((res) => console.log("Updated" + res)) */
    this.api.submitScore(rowData).subscribe((res: any) => {
      console.log(res)
    })
  }

}
