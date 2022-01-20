import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Newuser } from '../models/newuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1,
      manager: '125',
      firstName: '155',
      lastName: '110'
    },
    {
      id: 2,
      manager: '120',
      firstName: '125',
      lastName: '50'
    }
  ];

  private newupersons: Newuser[] = [
    {
      id: 1,
      managerlist:125,
      newmanager: '125',
      newfirstName: '155',
      newlastName: '10'
    },
    {
      id: 2,
      managerlist:120,
      newmanager: '120',
      newfirstName: '100',
      newlastName: '200'
    }
  ];
  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

  getnewUsersFromData(): Newuser[] {
    return this.newupersons;
  }
  addnewUser(newuser: Newuser) {
    newuser.id = this.newupersons.length + 1;
    this.newupersons.push(newuser);

  }
}
