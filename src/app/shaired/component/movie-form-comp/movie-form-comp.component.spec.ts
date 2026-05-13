import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormCompComponent } from './movie-form-comp.component';

describe('MovieFormCompComponent', () => {
  let component: MovieFormCompComponent;
  let fixture: ComponentFixture<MovieFormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFormCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
