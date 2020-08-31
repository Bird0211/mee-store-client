import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/interface';

@Component({
  selector: 'app-simpy-item',
  templateUrl: './simpy-item.component.html',
  styleUrls: ['./simpy-item.component.less']
})
export class SimpyItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
