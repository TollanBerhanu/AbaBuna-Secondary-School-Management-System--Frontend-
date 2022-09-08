import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ViewChild('loginForm') loginForm: NgForm

  loginForm: FormGroup
  logged = false
  log = false
  accType: string = 'admin'

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private _toastService: ToastrService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
   }

  ngOnInit(): void {
  }

  addInfoToast(msg){
    this._toastService.info(msg)
  }

  changeAccType(accType: string){
    this.accType = accType
  }

  onSubmit(){
    var formData: FormData = new FormData()
    formData.append('email', this.loginForm.get('email').value)
    formData.append('password', this.loginForm.get('password').value)
    console.log('Login form Data: ' + formData)

    this.authService.login(formData, this.accType).subscribe((res) => {
      console.log(res)
      if(res.Token && res.Name){
        this.router.navigate([`/${this.accType}`])
        this.addInfoToast('Logged In')
        this.logged = true;
      } 
      if(!this.logged){
        this.addInfoToast('Invalid Credentals')
      }
    }, (err: any) => {
        this.addInfoToast('Invalid Credentals')
    })
  }

  loggedin(){
    this.log = true
  }

}
