import { HttpRequest } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { TestUrlService } from '../test-url.service';
import { ArrayListTestService } from './array-list-test.service';
// import axios, { isCancel, AxiosError } from 'axios';

const AXIOS = require('axios')

const URL_REGEXP = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export interface IArray {
  firstColumn: string;
  url: string
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {
  url: ''
  userForm: FormGroup;
  ArrayFormControl: FormGroup;
  arrayList: IArray[];
  dataArrayForm: FormArray<any> = new FormArray<any>([], Validators.required);
  private unsubscribingData$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private arrayListSevice: ArrayListTestService,
    private testUrlService: TestUrlService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]]
    })

    let testListArray: IArray[] = [
      {
        firstColumn: '123',
        url: 'https://www.google.com/search?q=Validators.pattern+%D0%B3%D0%BA%D0%B4&oq=Validators.pattern+%D0%B3%D0%BA%D0%B4&aqs=chrome..69i57j0i22i30j0i22i30i625j0i5i13i30.5016j0j7&sourceid=chrome&ie=UTF-8'
      },
      {
        firstColumn: '1234',
        url: 'https://www.google.com/search?q=Validators.pattern+%D0%B3%D0%BA%D0%B4&oq=Validators.pattern+%D0%B3%D0%BA%D0%B4&aqs=chrome..69i57j0i22i30j0i22i30i625j0i5i13i30.5016j0j7&sourceid=chrome&ie=UTF-8'
      },
    ]

    for (let elem of testListArray) {
      this.dataArrayForm.push(new FormGroup({
        firstColumn: new FormControl(`${elem.firstColumn}`, Validators.required),
        url: new FormControl(`${elem.url}`, Validators.pattern(`${URL_REGEXP}`))
      }))
    }

    // this.arrayListSevice.getArrayList().pipe(
    //   takeUntil(this.unsubscribingData$)
    // ).subscribe((list: IArray[]) => {
    //   for (let elem of list) {
    //     this.arrayForm.push(new FormGroup({
    //       firstColumn: new FormControl(`${elem.firstColumn}`, Validators.required),
    //       url: new FormControl(`${elem.url}`, Validators.pattern(`${URL_REGEXP}`))
    //     }))
    //   }
    // })


    this.testUrlService.getData('https://angular.io/guide/reactive-forms')
  }


  getData() {
    const req = new HttpRequest('GET', this.url, {
      reportProgress: true
    })
  }

  ngOnDestroy(): void {
    this.unsubscribingData$.next();
    this.unsubscribingData$.complete();
  }

}