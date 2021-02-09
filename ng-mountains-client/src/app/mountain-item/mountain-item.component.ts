import {Component, Input} from '@angular/core';
import {Mountain} from '../shared/mountain';

@Component({
  selector: 'app-mountain-item',
  templateUrl: './mountain-item.component.html',
  styleUrls: ['./mountain-item.component.css']
})
export class MountainItemComponent {

  @Input() mountain: Mountain;
  isVisibleDesc: boolean = false;

  hideDesc(){
    this.isVisibleDesc = !this.isVisibleDesc;
  }
}
