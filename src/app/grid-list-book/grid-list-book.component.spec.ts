import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListBookComponent } from './grid-list-book.component';

describe('GridListBookComponent', () => {
  let component: GridListBookComponent;
  let fixture: ComponentFixture<GridListBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
