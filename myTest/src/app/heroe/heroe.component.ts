import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../heroe';
@Component({
  selector: 'app-heroes',

  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  @Input() heroe?: Heroe;
  initTime: Date
  constructor() {
    this.initTime = new Date()
    // this.heroe = { name: 'tom', age: 23, gender: 'male' };
      // { name: 'sofia', age: 13, gender: 'female' };
  }
  // 生命周期：用于组件获取初始值
  ngOnInit(): void {}

  // 销毁
  ngOnDestroy() {}
}
