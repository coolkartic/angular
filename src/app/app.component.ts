import { Component, OnInit } from '@angular/core';
import { Newuser } from './models/newuser';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[];
  newusers: Newuser[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = [];
  editUserForm: boolean;
  editedUser: any = {};
  managerForm: boolean;
  oldusers: User[];
  oldmanagerlist: any;
  userId: any;
  newvalue: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
    this.newusers = this.getnewUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.userService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

  
  showAddManagerForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    console.log(this.users, '00000000000');
    this.oldusers = this.users;
    this.managerForm = true;
    this.isNewUser = true;

  }

  getnewUsers(): Newuser[] {
    return this.userService.getnewUsersFromData();
  }

  onOptionsSelected(e){
    console.log(e, '=========');
    this.userId = e;
    console.log(this.newusers);
    
    this.newvalue = this.newusers.filter( l => l.managerlist == e)
    console.log(this.newvalue ,"this.newvalue this.newvalue ");
    
  }
  saveUserlist(newuser: Newuser) {
    console.log(newuser, '--------');
    if (this.isNewUser) {
      this.userService.addnewUser(newuser);
    }
    this.userForm = false;
  }
}
