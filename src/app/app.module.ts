import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserManagementModule } from './user-management/user-management.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, UserManagementModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
