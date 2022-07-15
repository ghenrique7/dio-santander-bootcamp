import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCartComponent } from './image-cart.component';

describe('BookCartComponent', () => {
  let component: BookCartComponent;
  let fixture: ComponentFixture<BookCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
