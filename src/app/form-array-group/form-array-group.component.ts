import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-array-group',
  templateUrl: './form-array-group.component.html',
  styleUrls: ['./form-array-group.component.scss']
})
export class FormArrayGroupComponent implements OnInit {

  constructor() { }

  formGroupControl: FormGroup;

  ngOnInit(): void {

    this.formGroupControl = new FormGroup({
      dataListArray: new FormArray([
        new FormGroup({
          name: new FormControl('Taras'),
          age: new FormControl('30', Validators.minLength(4)),
        }),
        new FormGroup({
          name: new FormControl('Vika'),
          age: new FormControl('27'),
        })
      ])
    })
  }

  onSubmit(formGroupControl: FormGroup): void {
    console.log(formGroupControl.value);
  }


  trackByFn(index: any, item: any) {
    return index;
  }


  // dataListArrayHandling(): void {
  //   this.formGroupControl.valueChanges.pipe(
  //     debounceTime(500)
  //   ).subscribe(a => console.log(a))
  // }

  removeUserControl(i: number): void {
    (this.formGroupControl.get('dataListArray') as FormArray).removeAt(i);
  }

  addUser(): void {
    (this.formGroupControl.get('dataListArray') as FormArray).push(new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
    }),);

  }
}



