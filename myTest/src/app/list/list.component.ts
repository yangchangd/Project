import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes: Heroe[]
  constructor() {
    this.heroes = [
      {id:1, name: 'tom', age: 23, gender: 'male' },
      {id:2, name: 'sofia', age: 13, gender: 'female' }
    ]
  }

  ngOnInit(): void {
    
  }

}
