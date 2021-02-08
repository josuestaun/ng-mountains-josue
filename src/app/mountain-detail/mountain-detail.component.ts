import {Component, OnInit} from '@angular/core';
import {MountainService} from '../shared/mountain.service';
import {Mountain} from '../shared/mountain';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.css']
})
export class MountainDetailComponent implements OnInit {

  mountain: Mountain;
  mountainId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private mountainService: MountainService) {}

  ngOnInit() {
    this.mountainId = parseInt(this.activatedroute.snapshot.params['mountainId']);
    this.mountainService.getMountainById(this.mountainId).subscribe(
      (data: Mountain) => this.mountain = data
    );
  }
  goEdit():void{
    this.router.navigate(['/mountains', this.mountainId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
