import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

  userRegister$: Observable<any>;

  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userRegister$ = this.userService.postUser();
  }

}
