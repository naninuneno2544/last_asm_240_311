import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'add-book', component: AddBooksComponent},
  {path: 'book-detail/:id', component: BookDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
