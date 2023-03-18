import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {

  constructor(
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
}
