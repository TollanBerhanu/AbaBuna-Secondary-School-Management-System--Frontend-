import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegisterTeacherComponent } from './pages/admin/teacher/register-teacher/register-teacher.component';
import { ViewTeacherProfilesComponent } from './pages/admin/teacher/view-teacher-profiles/view-teacher-profiles.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterStudentComponent } from './pages/admin/student/register-student/register-student.component';
import { DeleteStudentComponent } from './pages/admin/student/delete-student/delete-student.component';
import { ViewStudentProfilesComponent } from './pages/admin/student/view-student-profiles/view-student-profiles.component';
import { DeleteTeacherComponent } from './pages/admin/teacher/delete-teacher/delete-teacher.component';
import { ViewProfilesComponent } from './pages/admin/shared/view-profiles/view-profiles.component';
import { DeleteEntityComponent } from './pages/admin/shared/delete-entity/delete-entity.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ViewAllSubjectsComponent } from './pages/admin/subject/view-all-subjects/view-all-subjects.component';
import { RegisterNewSubjectComponent } from './pages/admin/subject/register-new-subject/register-new-subject.component';
import { DeleteSubjectComponent } from './pages/admin/subject/delete-subject/delete-subject.component';
import { ViewAllClassesComponent } from './pages/admin/class/view-all-classes/view-all-classes.component';
import { RegisterNewClassComponent } from './pages/admin/class/register-new-class/register-new-class.component';
import { DeleteClassComponent } from './pages/admin/class/delete-class/delete-class.component';
import { CreateScheduleComponent } from './pages/admin/schedule/create-schedule/create-schedule.component';
import { GenerateIdComponent } from './pages/admin/id/generate-id/generate-id.component';
import { RegisterEntityComponent } from './pages/admin/shared/register-entity/register-entity.component';
import { FillGradesComponent } from './pages/teacher/fill-grades/fill-grades.component';
import { CreateExamComponent } from './pages/teacher/create-exam/create-exam.component';
import { GenerateTranscriptComponent } from './pages/teacher/generate-transcript/generate-transcript.component';
import { PostMaterialsComponent } from './pages/teacher/post-materials/post-materials.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewGradesComponent } from './pages/student/view-grades/view-grades.component';
import { ViewMaterialsComponent } from './pages/student/view-materials/view-materials.component';
import { TakeExamComponent } from './pages/student/take-exam/take-exam.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './pages/teacher/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './pages/student/student-dashboard/student-dashboard.component';
import { ChangeStudentPasswordComponent } from './pages/student/change-student-password/change-student-password.component';
import { ChangeTeacherPasswordComponent } from './pages/teacher/change-teacher-password/change-teacher-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './layouts/login/login.component';
import { LoadingComponent } from './layouts/loading/loading.component';
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { NewExamComponent } from './pages/teacher/create-exam/new-exam/new-exam.component';
import { EditExamComponent } from './pages/teacher/create-exam/edit-exam/edit-exam.component';
import { AssignTeachersComponent } from './pages/admin/assign-teachers/assign-teachers.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RegisterTeacherComponent,
    ViewTeacherProfilesComponent,
    AdminComponent,
    RegisterStudentComponent,
    DeleteStudentComponent,
    ViewStudentProfilesComponent,
    DeleteTeacherComponent,
    ViewProfilesComponent,
    DeleteEntityComponent,
    HomeLayoutComponent,
    ViewAllSubjectsComponent,
    RegisterNewSubjectComponent,
    DeleteSubjectComponent,
    ViewAllClassesComponent,
    RegisterNewClassComponent,
    DeleteClassComponent,
    CreateScheduleComponent,
    GenerateIdComponent,
    RegisterEntityComponent,
    FillGradesComponent,
    CreateExamComponent,
    GenerateTranscriptComponent,
    PostMaterialsComponent,
    DashboardComponent,
    ViewGradesComponent,
    ViewMaterialsComponent,
    TakeExamComponent,
    AdminDashboardComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent,
    ChangeStudentPasswordComponent,
    ChangeTeacherPasswordComponent,
    LoginComponent,
    LoadingComponent,
    NewExamComponent,
    EditExamComponent,
    AssignTeachersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    NgbModule,
    NgxBarcodeModule,
    AngularToastifyModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
