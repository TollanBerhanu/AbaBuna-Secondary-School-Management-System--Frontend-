import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { FileService } from 'app/services/file.service';

@Component({
  selector: 'app-post-materials',
  templateUrl: './post-materials.component.html',
  styleUrls: ['./post-materials.component.css']
})
export class PostMaterialsComponent implements OnInit {
  uploadForm: FormGroup

  constructor(private api: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    var formGroupObject = {
      title: '',
      message: '',
      file: ''
    }
    this.uploadForm = this.formBuilder.group(formGroupObject)

  }

  onFileChanged(event: any){
    //Upload File to api
    const file = event.target.files[0]
    this.uploadForm.patchValue({
      file: file
    })
    this.uploadForm.get('file').updateValueAndValidity()
  }

  
  onSubmit(){
    console.log('Submitting...')
    var formData = new FormData()
    formData.append('title', this.uploadForm.get('title').value)
    formData.append('text', this.uploadForm.get('message').value)
    formData.append('post_data', this.uploadForm.get('file').value)

    formData.append('target', 'student')
    formData.append('ids', 'all')
    formData.append('all', 'true')

    this.api.postTeacherMaterials(formData).subscribe((res: any) => {
      console.log(res)
    })
  }

}
