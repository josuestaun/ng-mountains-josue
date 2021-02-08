import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mountain } from '../shared/mountain';
import { ActivatedRoute, Router } from '@angular/router';
import { MountainService } from '../shared/mountain.service';

@Component({
  selector: 'app-mountain-new',
  templateUrl: './mountain-new.component.html',
  styleUrls: ['./mountain-new.component.css']
})
export class MountainNewComponent implements OnInit {

  pageTitle = 'Mountain New';
  errorMessage: string;
  mountainForm: FormGroup;

  mountainId:number;
  mountain: Mountain;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private mountainService: MountainService) {  }

    ngOnInit(): void {
      this.mountainForm = this.fb.group({
        nombre: '',
        descripcion: '',
        altura: '',
        desnivel: '',
        tiempo: ''
      });

    // Read the product Id from the route parameter
    this.mountainId = parseInt(this.activatedroute.snapshot.params['mountainId']);
  }

  saveMountain(): void {
    if (this.mountainForm.valid) {
      if (this.mountainForm.dirty) {
        this.mountain = this.mountainForm.value;
        this.mountain.id = this.mountainId;
        
        this.mountainService.createMountain(this.mountain)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.mountainForm.reset();
    this.router.navigate(['']);
  }
  
}
