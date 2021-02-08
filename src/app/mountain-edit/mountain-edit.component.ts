import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Mountain } from '../shared/mountain';
import { MountainService } from '../shared/mountain.service';

@Component({
  templateUrl: './mountain-edit.component.html'
})
export class MountainEditComponent implements OnInit{

  pageTitle = 'Mountain Edit';
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
    this.mountainId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getMountain(this.mountainId);
  }

  getMountain(id: number): void {
    this.mountainService.getMountainById(id)
      .subscribe(
        (mountain: Mountain) => this.displayMountain(mountain),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayMountain(mountain: Mountain): void {
    if (this.mountainForm) {
      this.mountainForm.reset();
    }
    this.mountain = mountain;
    this.pageTitle = `Edit Mountain: ${this.mountain.nombre}`;

    // Update the data on the form
    this.mountainForm.patchValue({
      nombre: this.mountain.nombre,
      descripcion: this.mountain.descripcion,
      altura: this.mountain.altura,
      desnivel: this.mountain.desnivel,
      tiempo: this.mountain.tiempo
    });
  }

  deleteMountain(): void {
    if (this.mountain.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the mountain: ${this.mountain.nombre}?`)) {
        this.mountainService.deleteMountain(this.mountain.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  saveMountain(): void {
    if (this.mountainForm.valid) {
      if (this.mountainForm.dirty) {
        this.mountain = this.mountainForm.value;
        this.mountain.id = this.mountainId;
        
        this.mountainService.updateMountain(this.mountain)
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
