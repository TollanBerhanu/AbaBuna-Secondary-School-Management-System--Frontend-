import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootURL: string = 'http://192.168.137.1:3000/' // For images

  constructor(private webReqService: WebRequestService) { }

  //Teacher
  getAllTeachers(){
    return this.webReqService.get('teacher')
  }
  getOneTeacher(formData: FormData){
    return this.webReqService.post('teacher', formData)
  }
  registerTeacher(formData: FormData){
    return this.webReqService.post('teacher/create', formData)
  }
  //For Teachers
  getClassInfo(){
    return this.webReqService.get('teacher/myclasses')
  }
  getHRClassInfo(){
    return this.webReqService.get('teacher/myclass')
  }
  submitScore(formData: Object){
    return this.webReqService.post('teacher/submit/score', formData)
  }

  //Students
  getAllStudents(){
    return this.webReqService.get('student')
  }
  getOneStudent(formData: FormData){
    return this.webReqService.post('student', formData)
  }
  registerStudent(formData: Object){
    return this.webReqService.post('student/create', formData)
  }
  //For Students
  getMyInfo(){
    return this.webReqService.get('student/me/info')
  }
  getMyScore(){
    return this.webReqService.get('student/me/score')
  }

  //Addresses
  getAllAdresses(){
    return this.webReqService.get('address')
  }
  getOneAddress(formData: FormData){
    return this.webReqService.post('address', formData)
  }

  //Class Assignment
  assignStudents(formData: any){
    return this.webReqService.post('class/assign', formData)
  }
  approveClassAssignment(){
    return this.webReqService.get('class/assign/approve')
  }

  //School
  startCurrentSchoolYear(){
    return this.webReqService.get('school/start')
  }
  completeRegistration(){
    return this.webReqService.get('school/registration/complete')
  }
  generateSchedule(formData: FormData){
    return this.webReqService.post('school/schedule/generate', formData)
  }
  approveSchedule(){
    return this.webReqService.get('school/schedule/approve')
  }
  startClass(){
    return this.webReqService.get('school/class/start')
  }
  getCurrentYearSchedule(){
    return this.webReqService.get('school/schedule')
  }
  endCurrentSchoolYear(){
    return this.webReqService.get('school/end')
  }

  //Class
  getAllClasses(){
    return this.webReqService.get('class')
  }
  getOneClass(formData: FormData){
    return this.webReqService.post('class', formData)
  }
  getClassStudents(formData: any){
    return this.webReqService.post('class/students', formData)
  }
  registerClass(formData: FormData){
    return this.webReqService.post('class/create', formData)
  }
  deleteClass(formData: FormData){
    return this.webReqService.delete('class/delete', formData)
  }
  setHomeroomTeacher(formData: FormData){
    return this.webReqService.post('class/update/hrteacher', formData)
  }

  //Guardians
  getAllGuardians(){
    return this.webReqService.get('guardian')
  }
  getOneGuardian(formData: FormData){
    return this.webReqService.post('guardian', formData)
  }

  //Subjects
  getAllSubjects(){
    return this.webReqService.get('subject')
  }
  getOneSubject(formData: FormData){
    return this.webReqService.post('subject', formData)
  }
  registerSubject(formData: Object){
    return this.webReqService.post('subject/create', formData)
  }
  setTeacherSubject(formData: any){
    return this.webReqService.post('subject/teacher/set', formData)
  }
  unsetTeacherSubject(formData: FormData){
    return this.webReqService.post('subject/teacher/unset/subject', formData)
  }
  unsetTeacherSection(formData: FormData){
    return this.webReqService.post('subject/teacher/unset/section', formData)
  }

  //Scores
  getAllScores(){
    return this.webReqService.get('score')
  }
  getOneScore(formData: FormData){
    return this.webReqService.post('score', formData)
  }

  //ScoreItems
  getAllScoreItems(){
    return this.webReqService.get('scoreitem')
  }
  getOneScoreItem(formData: FormData){
    return this.webReqService.post('scoreitem', formData)
  }

  //Posts
  postTeacherMaterials(formData: FormData){
    return this.webReqService.post('post/create', formData)
  }
  getTeacherPosts(){
    return this.webReqService.get('post/all')
  }

}
