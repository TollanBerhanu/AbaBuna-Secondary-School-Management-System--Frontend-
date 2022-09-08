import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-view-grades',
  templateUrl: './view-grades.component.html',
  styleUrls: ['./view-grades.component.css']
})
export class ViewGradesComponent implements OnInit {
  // grades: any = [ [ [], [] ], [ [], [] ] ]
  subjects = ['English', 'Afan-Oromo', 'Amharic', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'History', 'Civics', 'ICT', 'HPE']

  grades = []
  myScores = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    /* this.api.getAllMarks().subscribe((marks: any) => {
      console.log(marks)
      marks.data.forEach((mark) => {
        if(mark.grade =='9' && mark.semester == 0){
          this.grades[0][0].push(mark)
          console.log('G9S1: ' + JSON.stringify(mark))
        }
        else if(mark.grade =='9' && mark.semester == 1){
          this.grades[0][1].push(mark)
          console.log('G9S2: ' + mark)
        }
        else if(mark.grade =='10' && mark.semester == 0){
          this.grades[1][0].push(mark)
          console.log('G10S1: ' + mark)
        }
        else if(mark.grade =='10' && mark.semester == 1){
          this.grades[1][1].push(mark)
          console.log('G10S2: ' + mark)
        }
      });
    }) */
    this.api.getMyInfo().subscribe((data: any) => {
      this.grades = data.st_statuses
      var i = 0
      data.st_statuses.forEach(st_status => {
        st_status.scores.forEach(score => {
          score.score_items.forEach(score_item => {
            var temp, total = 0
            if(score_item.data == '[]') temp = [ // Assign default values
               {s_value: '-'}, {s_value: '-'}, {s_value: '-'}, {s_value: '-'}, {s_value: '-'},
            ]
            else temp = JSON.parse(score_item.data) // Assign set values
            temp.forEach(element => { // Calculate Total
              if(element.s_value != '-') total += element.s_value
            });
            this.myScores[i] = {
              data: temp,
              subject: score_item.subject.name,
              total: total
            } 
            i++
          });
        });
      });
      console.log(this.myScores)
    })
  }

}
