import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormControl, Validators, FormBuilder} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-array-group',
  templateUrl: './form-array-group.component.html',
  styleUrls: ['./form-array-group.component.scss']
})
export class FormArrayGroupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formGroupControl: FormGroup;

  get items(): FormArray {
    return this.formGroupControl.get('dataListArray') as FormArray;
  }

  get itemsControls(): FormGroup[] {
    return this.items.controls as FormGroup[];
  }

  ngOnInit(): void {

    this.formGroupControl = this.fb.group({
      dataListArray: this.fb.array([
        this.fb.group({
          name: ['Taras'],
          age: [30]
        }),
        this.fb.group({
          name: ['Vika'],
          age: [30]
        }),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.formGroupControl.value);
  }

  removeUserControl(i: number): void {
    this.items.removeAt(i);
  }

  addUser(): void {
    const item = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required]
    });
    this.items.push(item);
  }
}



