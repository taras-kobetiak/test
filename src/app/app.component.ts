import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface IObject {
  id: number;
  rating: FormGroup
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  rating: number = 3;
  starCount: number = 5;

  onRatingChanged(rating: number) {
    this.rating = rating;
  }



  arr = [1000, 2000, 3000]
  title = 'test-app';
  obj!: IObject[];
  rate = 3;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.obj = [
      {
        id: 1000, rating: this.fb.group({
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5
        })
      },
      {
        id: 2000, rating: this.fb.group({
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5
        })
      },
      {
        id: 3000, rating: this.fb.group({
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5
        })
      },
    ]

    this.obj.forEach(el => {
      el.rating.valueChanges.subscribe(v => console.log(v)
      )
    })
  }


  // click(event: any): void {
  //   if (event.target.tagName === "INPUT") {
  //     console.log(event.target.value)
  //   }





}

