import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GridListBookComponent } from './grid-list-book/grid-list-book.component';
import { CarouselBooksComponent } from './carousel-books/carousel-books.component';
import { CarouselModule } from 'primeng/carousel';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddBooksComponent } from './add-books/add-books.component';
import { InputTextModule } from 'primeng/inputtext';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    TopBarComponent,
    GridListBookComponent,
    CarouselBooksComponent,
    AdminPageComponent,
    UserPageComponent,
    AddBooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
