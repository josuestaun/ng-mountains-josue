import {Component, OnInit} from '@angular/core';
import {Mountain} from '../shared/mountain';
import {MountainService} from '../shared/mountain.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mountains: Mountain[]=[];
  constructor(private mountainService: MountainService) { }

  ngOnInit() {
   this.mountainService.getMountains().subscribe(
    (data: Mountain[]) => this.mountains = data
   );
  }
}
