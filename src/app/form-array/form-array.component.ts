import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { pipe, distinct, debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  formGroupControl: FormGroup;

  ngOnInit(): void {

    this.formGroupControl = new FormGroup({
      dataListArray: new FormArray([
        new FormControl('one'),
        new FormControl('two'),
        new FormControl('three'),
      ])
    })

    this.dataListArrayHandling();
  }

  onSubmit(formGroupControl: FormGroup): void {
    console.log(formGroupControl.value);
  }


  dataListArrayHandling(): void {
    this.formGroupControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(a => console.log(a))


  }

  removeUserControl(i: number): void {
    (this.formGroupControl.get('dataListArray') as FormArray).removeAt(i);
  }

  addUser(): void {
    (this.formGroupControl.get('dataListArray') as FormArray).push(new FormControl(''));
  }
}

