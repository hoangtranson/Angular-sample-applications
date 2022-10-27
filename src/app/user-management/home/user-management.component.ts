import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-management-page',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementPage {
  users: any;
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.users = res;
      });
  }
}
