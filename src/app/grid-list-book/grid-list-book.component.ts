import { Component, OnInit } from '@angular/core';
import { CrudService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-grid-list-book',
  templateUrl: './grid-list-book.component.html',
  styleUrls: ['./grid-list-book.component.css']
})
export class GridListBookComponent implements OnInit{
  books: Book[] = [];

  constructor(private crudService: CrudService) {}

  // getBooks(): void {
  //   this.crudService.getBooks()
  //     .subscribe(books => this.books = books);
  // }

  ngOnInit(): void {
    // this.getBooks();
  }
  
}

