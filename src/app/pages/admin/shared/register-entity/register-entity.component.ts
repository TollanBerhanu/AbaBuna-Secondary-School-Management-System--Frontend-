import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-register-entity',
  templateUrl: './register-entity.component.html',
  styleUrls: ['./register-entity.component.css']
})
export class RegisterEntityComponent implements OnInit {
  // @ViewChild('regForm') regForm: NgForm
  // @ViewChild('grade9') grade9: NgModel
  // @ViewChild('grade10') grade10: NgModel
  @ViewChild('subjectnine') subjectnine: NgModel
  @ViewChild('subjectten') subjectten: NgModel
  @ViewChild('subjecteleven') subjecteleven: NgModel
  @ViewChild('subjecttwelve') subjecttwelve: NgModel
  @ViewChild('common') common: NgModel

  genders = ['M', 'F']
  grades = [9, 10]
  sections = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  isLoading: boolean = false
  submitted: boolean = false
  success: boolean
  showSuccessMessage: boolean = false
  successMessage: string = ''

  imgURL:any = './assets/img/NoPicMale.jpg' //Default image path
  teacher: boolean = false
  student: boolean = false
  subject: boolean = false
  class: boolean = false

  //To store classes from database
  classes: any = []
  //To store subjects from database
  subjects: any = ['English', 'Afan-Oromo', 'Amharic', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'History', 'Civics', 'ICT', 'HPE']

  public elements = [0];

  uploadForm: FormGroup

  toggleGrade = false

  constructor(private currentRoute: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Checks the parent route and decides which blocks in the form to display
    switch(this.currentRoute.snapshot.parent.url.toString()){
      case 'teacher': this.teacher = true; break;
      case 'student': this.student = true; break;
      case 'subject': this.subject = true; break;
      case 'class': this.class = true; break;
    }
    
    var formGroupObject = {
      firstname: '',
      middlename: '',
      lastname: '',
      gender: '',
      phoneno: '',
      country: '',
      city: '',
      kebele: '',
      houseno: '',
      email: '',
      password: '',
      photo: ''
    }
    if(this.teacher) this.uploadForm = this.formBuilder.group(formGroupObject)
    if(this.student) this.uploadForm = this.formBuilder.group({
      ...formGroupObject,
      grade: '',
      emergencyname: '',
      emergencyphone: ''
    })
    if(this.class) this.uploadForm = this.formBuilder.group({
      class: '',
      section: ''
    })
    if(this.subject) this.uploadForm = this.formBuilder.group({
      subjectname: '',
      subjectcode: '',
      common: 'true',
      gradegiven: 9,
      classperweek: ''
    })
  }


  //Determines the message to display to each 'help-block'
  helpMessage(control: NgModel, name: string){
    if(control.name == 'email' && control.value.length != 0) return 'Please enter a valid email'
    if(control.value.length == 0) return `${name} is required`
    if(control.value.length <= 2) return `${name} must be more than 2 characters`
  }

  //Sets the image to the selected photo every time it's changed
  onPhotoChanged(event: any){
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			alert('You must select an image');
			return;
		}
		var mimeType = event.target.files[0].type;
		if (mimeType.match(/image\/*/) == null) {
			alert("Only images are supported");
			return;
		}
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
      this.imgURL = reader.result
		}

    //Upload Photo to api
    const file = event.target.files[0]
    this.uploadForm.patchValue({
      photo: file
    })
    this.uploadForm.get('photo').updateValueAndValidity()
  }

  toggleGrades(){ this.toggleGrade = !this.toggleGrade }

  //Bug fixes before submitting the form
  checkForm(){
    return new Promise<void>((resolve, reject) => {
    //Set default values of checkboxes to false (otherwise they would be empty strings)
      /* if(this.teacher) this.regForm.form.patchValue({
        grade9: (this.grade9.value)? true : false, 
        grade10: (this.grade10.value)? true : false 
      }) */

      // if(this.subject) this.uploadForm.patchValue({
      //   subjectnine: (this.subjectnine.value)? true : false,
      //   subjectten: (this.subjectten.value)? true : false,
      //   subjecteleven: (this.subjecteleven.value)? true : false,
      //   subjecttwelve: (this.subjecttwelve.value)? true : false,
      // })
      resolve()
    })
  }

  //Called after we get a response from the api
  afterRegistered(entity: string, success: boolean){
    this.isLoading = false
    this.success = success
    this.showSuccessMessage = true
    if(success) {
      this.successMessage = `${entity} Registered!`
    }
    else this.successMessage = `Failed to Register ${entity}`
  }

  //Called when the form gets submitted
   onSubmit(){
     if(this.uploadForm.invalid){
       alert('This form is invalid')
       return
     }
     this.isLoading = true
     this.submitted = true
     
     this.checkForm().then(() => {
      var formData = new FormData()
      if(this.teacher || this.student){
        formData.append('first_name', this.uploadForm.get('firstname').value)
        formData.append('middle_name', this.uploadForm.get('middlename').value)
        formData.append('last_name', this.uploadForm.get('lastname').value)
        formData.append('sex', this.uploadForm.get('gender').value)
        formData.append('phone_num', this.uploadForm.get('phoneno').value)
        formData.append('country', this.uploadForm.get('country').value)
        formData.append('city', this.uploadForm.get('city').value)
        formData.append('kebele', this.uploadForm.get('kebele').value)
        formData.append('house_no', this.uploadForm.get('houseno').value)
        formData.append('email', this.uploadForm.get('email').value)
        formData.append('password', this.uploadForm.get('password').value)
        formData.append('profile', this.uploadForm.get('photo').value)
      }
      if(this.teacher) this.api.registerTeacher(formData).subscribe((data: any) => {
        //Send Request to API
        console.log('Teacher Registered: ' + data)
      })
      if(this.student){
        formData.append('class', this.uploadForm.get('grade').value)
        formData.append('g_name', this.uploadForm.get('emergencyname').value)
        formData.append('g_phone_num', this.uploadForm.get('emergencyphone').value)
        //Send Request to API
        this.api.registerStudent(formData).subscribe((data: any) => {
        console.log('Student Registered: ' + data)
        })
      }
      if(this.class){
        formData.append('grade', this.uploadForm.get('class').value)
        formData.append('section', this.uploadForm.get('section').value)
        //Send Request to API
        this.api.registerClass(formData).subscribe((data: any) => {
          console.log('Class Registered: ' + data)
          this.afterRegistered('Class', true)
        })
      }
      if(this.subject){
        formData.append('name', this.uploadForm.get('subjectname').value)
        formData.append('code', this.uploadForm.get('subjectcode').value)
        formData.append('grade', this.uploadForm.get('gradegiven').value)
        formData.append('class_per_week', this.uploadForm.get('classperweek').value)
        formData.append('common', this.uploadForm.get('common').value)
        console.log(this.uploadForm.get('subjectname').value);
        console.log(this.uploadForm.get('subjectcode').value);
        console.log(this.uploadForm.get('gradegiven').value);
        console.log(this.uploadForm.get('common').value);
        console.log(this.uploadForm.get('classperweek').value);
        this.api.registerSubject(formData).subscribe((data: any) => {
          console.log('Subject Registered: ' + data)
          this.afterRegistered('Subject', true)
        })
      }

    })
  }

}