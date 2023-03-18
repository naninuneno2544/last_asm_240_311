import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBooksComponent } from './carousel-books.component';

describe('CarouselBooksComponent', () => {
  let component: CarouselBooksComponent;
  let fixture: ComponentFixture<CarouselBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
