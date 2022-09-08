import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';

import { RegisterTeacherComponent } from './pages/admin/teacher/register-teacher/register-teacher.component'
import { ViewTeacherProfilesComponent } from './pages/admin/teacher/view-teacher-profiles/view-teacher-profiles.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DeleteTeacherComponent } from './pages/admin/teacher/delete-teacher/delete-teacher.component';
import { DeleteStudentComponent } from './pages/admin/student/delete-student/delete-student.component';
import { RegisterStudentComponent } from './pages/admin/student/register-student/register-student.component';
import { ViewStudentProfilesComponent } from './pages/admin/student/view-student-profiles/view-student-profiles.component';
import { CreateScheduleComponent } from './pages/admin/schedule/create-schedule/create-schedule.component';
import { GenerateIdComponent } from './pages/admin/id/generate-id/generate-id.component';

import { ViewAllSubjectsComponent } from './pages/admin/subject/view-all-subjects/view-all-subjects.component';
import { RegisterNewSubjectComponent } from './pages/admin/subject/register-new-subject/register-new-subject.component';
import { DeleteSubjectComponent } from './pages/admin/subject/delete-subject/delete-subject.component';
import { DeleteClassComponent } from './pages/admin/class/delete-class/delete-class.component';
import { RegisterNewClassComponent } from './pages/admin/class/register-new-class/register-new-class.component';
import { ViewAllClassesComponent } from './pages/admin/class/view-all-classes/view-all-classes.component';
import { FillGradesComponent } from './pages/teacher/fill-grades/fill-grades.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { CreateExamComponent } from './pages/teacher/create-exam/create-exam.component';
import { GenerateTranscriptComponent } from './pages/teacher/generate-transcript/generate-transcript.component';
import { PostMaterialsComponent } from './pages/teacher/post-materials/post-materials.component';
import { ChangeTeacherPasswordComponent } from './pages/teacher/change-teacher-password/change-teacher-password.component';
import { ViewGradesComponent } from './pages/student/view-grades/view-grades.component';
import { ChangeStudentPasswordComponent } from './pages/student/change-student-password/change-student-password.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { TakeExamComponent } from './pages/student/take-exam/take-exam.component';
import { ViewMaterialsComponent } from './pages/student/view-materials/view-materials.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './layouts/login/login.component';
import { NewExamComponent } from './pages/teacher/create-exam/new-exam/new-exam.component';
import { EditExamComponent } from './pages/teacher/create-exam/edit-exam/edit-exam.component';
import { AssignTeachersComponent } from './pages/admin/assign-teachers/assign-teachers.component';


export const AppRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
  }, 
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'teacher', component: AdminComponent, children: [
          { path: 'view', component: ViewTeacherProfilesComponent },
          { path: 'register', component: RegisterTeacherComponent },
          { path: 'delete', component: DeleteTeacherComponent },
          { path: '**', redirectTo: 'view' }
      ] },
      { path: 'student', component: AdminComponent, children: [
          { path: 'view', component: ViewStudentProfilesComponent },
          { path: 'register', component: RegisterStudentComponent },
          { path: 'delete', component: DeleteStudentComponent },
          { path: '**', redirectTo: 'view' }
      ] },
      { path: 'subject', component: AdminComponent, children: [
          { path: 'view', component: ViewAllSubjectsComponent },
          { path: 'register', component: RegisterNewSubjectComponent },
          { path: 'delete', component: DeleteSubjectComponent },
          { path: '**', redirectTo: 'view' }
      ] },
      { path: 'class', component: AdminComponent, children: [
          { path: 'view', component: ViewAllClassesComponent },
          { path: 'register', component: RegisterNewClassComponent },
          { path: 'delete', component: DeleteClassComponent },
          { path: '**', redirectTo: 'view' }
      ] },
      { path: 'assign/teachers', component: AssignTeachersComponent },
      { path: 'schedule/create', component: CreateScheduleComponent },
      { path: 'id/generate', component: GenerateIdComponent },
      { path: '**', redirectTo: 'dashboard'}
    ]
  },
  {
    path: 'teacher', component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: TeacherDashboardComponent },
      { path: 'fill-grades', component: FillGradesComponent },
      { path: 'create-exam', component: CreateExamComponent, children: [
        { path: 'new', component: NewExamComponent },
        { path: 'edit', component: EditExamComponent }
      ] },
      { path: 'generate-transcript', component: GenerateTranscriptComponent },
      { path: 'post-materials', component: PostMaterialsComponent },
      { path: 'my-schedule', component: ChangeTeacherPasswordComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  {
    path: 'student', component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'view-grades', component: ViewGradesComponent },
      { path: 'take-exam', component: TakeExamComponent },
      { path: 'view-materials', component: ViewMaterialsComponent },
      { path: 'my-schedule', component: ChangeStudentPasswordComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  {
    path: 'template', component: AdminLayoutComponent, children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'user',           component: UserComponent },
      { path: 'table',          component: TableComponent },
      { path: 'typography',     component: TypographyComponent },
      { path: 'icons',          component: IconsComponent },
      { path: 'maps',           component: MapsComponent },
      { path: 'notifications',  component: NotificationsComponent },
      { path: 'upgrade',        component: UpgradeComponent },
      { path: '**', redirectTo: 'dashboard'}

    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]
