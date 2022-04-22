import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'

export class UserInfo {
  constructor(
    public username: string = '',
    public password: string = ''
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: UserInfo;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.model = new UserInfo();
  }

  ngOnInit(): void {}

  login() {
    console.log(this.route);
    alert('登录成功！')
    this.router.navigate(['/index/heroeList', {username: this.model.username}])
  }
}
