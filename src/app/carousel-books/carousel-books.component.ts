import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-carousel-books',
  templateUrl: './carousel-books.component.html',
  styleUrls: ['./carousel-books.component.css']
})
export class CarouselBooksComponent {
  books: any = [];

  constructor(private crudService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.crudService.GetBooks().subscribe((res: any) => {
      console.log(res)
      this.books = res;
    });
  }

}
