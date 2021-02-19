import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {UserService} from '../user-service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.findUser(id)
    .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.userService.save(this.user)
      .subscribe(result => this.gotoUserList());
  }

  gotoUserList(): void {
    this.router.navigate(['/users']);
  }

}
