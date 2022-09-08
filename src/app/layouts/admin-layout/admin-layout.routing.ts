import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { RegisterTeacherComponent } from '../../pages/admin/teacher/register-teacher/register-teacher.component'
import { ViewTeacherProfilesComponent } from 'app/pages/admin/teacher/view-teacher-profiles/view-teacher-profiles.component';
import { AdminComponent } from 'app/pages/admin/admin.component';
import { DeleteTeacherComponent } from 'app/pages/admin/teacher/delete-teacher/delete-teacher.component';
import { DeleteStudentComponent } from 'app/pages/admin/student/delete-student/delete-student.component';
import { RegisterStudentComponent } from 'app/pages/admin/student/register-student/register-student.component';
import { ViewStudentProfilesComponent } from 'app/pages/admin/student/view-student-profiles/view-student-profiles.component';
/* 
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'admin', children: [
        { path: 'teacher', component: AdminComponent, children: [
            { path: 'view-profiles', component: ViewTeacherProfilesComponent },
            { path: 'register', component: RegisterTeacherComponent },
            { path: 'delete', component: DeleteTeacherComponent }
        ] },
        { path: 'student', component: AdminComponent, children: [
            { path: 'view-profiles', component: ViewStudentProfilesComponent },
            { path: 'register', component: RegisterStudentComponent },
            { path: 'delete', component: DeleteStudentComponent }
        ] },
        { path: '**', redirectTo: 'teacher'}
    ] }
    
];
 */