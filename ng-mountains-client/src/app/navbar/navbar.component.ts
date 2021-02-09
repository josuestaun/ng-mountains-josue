import { Component, OnInit } from '@angular/core';
import { MountainService } from '../shared/mountain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private mountainService: MountainService, private router: Router) { }

  ngOnInit() {
  }

  newMountain(){
      // Get max mountain Id from the mountain list
      this.mountainService.getMaxMountainId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/mountains', this.id, 'new'])

  }

}
