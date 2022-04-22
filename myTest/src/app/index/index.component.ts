import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  username: string = ''
  constructor(
    private route: ActivatedRoute,
    // private router: Router
  ) { }

  ngOnInit(): void {
    // this.username = new String(this.route.snapshot.paramMap.get('username')).value
    this.username = 'tom'

    console.log(typeof this.route.snapshot.paramMap.get('username'));
    
  }

}
