import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-assign-teachers',
  templateUrl: './assign-teachers.component.html',
  styleUrls: ['./assign-teachers.component.css']
})
export class AssignTeachersComponent implements OnInit {
  //assignmentForm

  teachers: any = []

  selectedSections: any = ['']
  selectedSubjects: any = ['']

  grade = []
  subject = []
  section = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllTeachers().subscribe((data: any) => {
      this.teachers = data
    })
    /*this.api.getAllClasses().subscribe((data: any) => {
      this.grades = data
       this.grades[0] = data[0].grade
      data.forEach((dat) => {
        this.grades.forEach((gr, i) => {
          if(dat.grade != gr) this.grades[i] = dat.grade
        })
      });
      console.log(this.grades) 
    })*/
  }

  onGradeSelected(grade, index){
    // Get all classes of the selected grade
    this.section[index] = ''
    let i = 0, j = 0, tempCls = [], tempSubj = []
    this.api.getAllClasses().subscribe((clss: any) => {
      clss.forEach(cls => {
        if(cls.grade == grade.value){
          tempCls[i] = cls.section
          i++
        }
      });
      this.selectedSections[index] = tempCls
      console.log('Selected Grades: ' + this.selectedSections) 
    })
    // Get all subjects of the selected grade
    this.api.getAllSubjects().subscribe((subjects: any) => {
      subjects.forEach(subject => {
        if(subject.grade == grade.value){
          tempSubj[j] = subject.name
          j++
        }
      });
      this.selectedSubjects[index] = tempSubj
      console.log('Selected Subjects: ' + this.selectedSubjects) 
    })
    //Store the selected grade of the teacher according to its index
    this.grade[index] = grade.value
    console.log(this.grade)
  }

  onSubjectSelected(subject, index){
    //Store the selected subject of the teacher according to its index
    this.subject[index] = subject.value
    console.log(this.subject)
  }

  onSectionSelected(section, index){
    //Store the selected section of the teacher according to its index
    var exists = this.section[index].search(section.value)
    console.log('Exists: ' + exists)
    if(section.checked && (exists==-1)) this.section[index] += section.value
    if(!section.checked && !(exists==-1)) this.section[index] = this.section[index].replace(section.value, '')
    console.log(this.section)
  }

  onAssign(index){
    console.log(this.teachers[index].id + ' ' + this.grade[index] + ' ' + this.subject[index] + ' ' + this.section[index])
    this.api.setTeacherSubject({
      teacher: this.teachers[index].id,
       grade: this.grade[index],
        subject: this.subject[index],
         section: this.section[index],
         all: false
        }).subscribe((res: any) => {
          console.log(res)
    })
  }
}