import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UserManagementPage } from './user-management/home/user-management.component';

const routes: Routes = [{ path: 'test-1', component: UserManagementPage }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
