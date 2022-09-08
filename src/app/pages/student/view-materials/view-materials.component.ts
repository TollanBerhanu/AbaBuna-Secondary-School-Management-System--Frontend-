import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-view-materials',
  templateUrl: './view-materials.component.html',
  styleUrls: ['./view-materials.component.css']
})
export class ViewMaterialsComponent implements OnInit {
  posts
  root

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.root = this.api.rootURL
    this.api.getTeacherPosts().subscribe((res: any) => {
      this.posts = res
      console.log(res)
    })
  }

}
