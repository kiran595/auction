import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];
  checkS: boolean;
  checkU: boolean;


  constructor(private userService: UserService) {
    this.user = new User();
    this.checkU = false;
    this.checkS = true;
  }

  ngOnInit() {
    console.log('getall');
    this.userService.query().subscribe(res => this.onSuccess(res), () => console.log('error'));
  }

  onSuccess(res) {
    this.users = res.json();
    console.log(res.json());
  }

  save() {
    console.log(this.user);
    this.userService.create(this.user).subscribe((res) => this.onSaveCR(res), () => console.log('error'));
  }

  onSaveCR(res) {
    console.log(res);
    this.userService.query().subscribe(response => this.onSuccess(response), () => console.log('error'));
  }

  delete(id) {
    this.userService.delete(id).subscribe(res => this.onsuccessDel(), () => console.log('error'));
  }

  onsuccessDel() {
    this.userService.query().subscribe(response => this.onSuccess(response), () => console.log('error'));
  }

  update(id) {
    this.checkU = !this.checkU;
    this.checkS = !this.checkS;
    // this.userService.find(id).subscribe(response => this.onSuccessGet(response), () => console.log('error'));
  }

  onSuccessGet(response) {
    this.user = response;
  }

  change() {
    // this.userService.update(this.user,this.user.id).subscribe(response => this.onSuccessUpdate(response), () => console.log('error'));
  }

  onSuccessUpdate(response) {
    this.userService.query().subscribe(res => this.onSuccess(res), () => console.log('error'));
  }

}
