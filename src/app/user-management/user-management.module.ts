import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementPage } from './home/user-management.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [UserManagementPage],
  exports: [UserManagementPage],
})
export class UserManagementModule {}
