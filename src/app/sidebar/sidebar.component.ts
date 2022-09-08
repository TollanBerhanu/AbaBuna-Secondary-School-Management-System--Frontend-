import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const AdminRoutes: RouteInfo[] = [
    { path: 'dashboard',       title: 'Dashboard',       icon:'nc-bank',           class: '' },
    { path: 'teacher',         title: 'Manage Teachers', icon:'nc-glasses-2',      class: '' },
    { path: 'student',         title: 'Manage Students', icon:'nc-single-02',      class: '' },
    { path: 'subject',         title: 'Manage Subjects', icon:'nc-single-copy-04', class: '' },
    { path: 'class',           title: 'Manage Classes',  icon:'nc-shop',           class: '' },
    { path: 'assign/teachers', title: 'Assign Teachers', icon:'nc-check-2',        class: '' },
    { path: 'schedule/create', title: 'Create Schedule', icon:'nc-calendar-60',    class: '' },
    { path: 'id/generate',     title: 'Generate ID',     icon:'nc-badge',          class: '' },
];

export const TeacherRoutes: RouteInfo[] = [
    { path: 'dashboard',           title: 'Dashboard',           icon:'nc-bank',       class: '' },
    { path: 'create-exam/new',     title: 'Create Exam',         icon:'nc-single-copy-04',      class: '' },
    { path: 'fill-grades',         title: 'My Classes',          icon:'nc-ruler-pencil',    class: '' },
    { path: 'generate-transcript', title: 'Homeroom',            icon:'nc-briefcase-24',    class: '' },
    { path: 'post-materials',      title: 'Post To Students',    icon:'nc-box',  class: '' },
    { path: 'my-schedule',         title: 'My Schedule',         icon:'nc-layout-11',  class: '' },
    // { path: 'change-password',     title: 'Change Password',     icon:'nc-lock-circle-open',    class: '' },
];

export const StudentRoutes: RouteInfo[] = [
    { path: 'dashboard',       title: 'Dashboard',           icon:'nc-bank',       class: '' },
    { path: 'view-grades',     title: 'View Grades',         icon:'nc-book-bookmark',    class: '' },
    { path: 'take-exam',       title: 'Take Exam',           icon:'nc-paper',      class: '' },
    { path: 'view-materials',  title: 'View Teacher Posts',  icon:'nc-box-2',    class: '' },
    { path: 'my-schedule',     title: 'My Schedule',         icon:'nc-layout-11',  class: '' },
];

export const TemplateRoutes: RouteInfo[] = [
    { path: 'dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: 'icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: 'maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: 'notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: 'user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: 'table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: 'typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: 'upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit{
     public menuItems: any[];

     accountType: string

     constructor(private currentRoute: ActivatedRoute){}

    ngOnInit() {
        this.accountType = this.currentRoute.snapshot.url.toString()

        switch(this.accountType){
            case 'admin': this.menuItems = AdminRoutes.filter(menuItem => menuItem); break;
            case 'teacher': this.menuItems = TeacherRoutes.filter(menuItem => menuItem); break;
            case 'student': this.menuItems = StudentRoutes.filter(menuItem => menuItem); break;
            case 'template': this.menuItems = TemplateRoutes.filter(menuItem => menuItem); break;
        }

    } 
}
