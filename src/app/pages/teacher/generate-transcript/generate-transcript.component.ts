import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ApiService } from 'app/services/api.service';


@Component({
  selector: 'app-generate-transcript',
  templateUrl: './generate-transcript.component.html',
  styleUrls: ['./generate-transcript.component.css']
})
export class GenerateTranscriptComponent implements OnInit {
  class
  myStudents = []
  student
  dispTrans = false
  root
  subjects = {}

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getHRClassInfo().subscribe((res: any) => {
      this.class = res.grade+''+res.section
      this.myStudents = res.st_statuses
    })
    this.root = this.api.rootURL
  }

  public exportHtmlToPDF(){
    let data = document.getElementById('transcript');
      
      html2canvas(data).then(canvas => {
          
          let docWidth = 208;
          let docHeight = canvas.height * docWidth / canvas.width;
          
          const contentDataURL = canvas.toDataURL('image/png')
          let doc = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
          
          doc.save('transcript.pdf');
      });
  }

  generateTranscript(student){
    this.student = student
    console.log(student)
    for(let score of student.scores){
      for(let scoreItem of score.score_items){
        if( this.subjects[scoreItem.subject.name] === undefined){
          this.subjects[scoreItem.subject.name] = []; 
        }
        this.subjects[scoreItem.subject.name].push({semester: score.semester, value: scoreItem.total});
      }
    }
    let data = [];
    for(const subject in this.subjects){
      let val_1 = this.subjects[subject][0]['value'];
      let val_2 = this.subjects[subject][1]['value'];
      let avg = (val_1 + val_2)/2;
      data.push({subject: subject, 1: val_1, 2: val_2, avg: avg});
    }
    this.subjects = data;
    this.dispTrans = true
  }

}
