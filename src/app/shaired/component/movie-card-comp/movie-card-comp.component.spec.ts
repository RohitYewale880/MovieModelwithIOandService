import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardCompComponent } from './movie-card-comp.component';

describe('MovieCardCompComponent', () => {
  let component: MovieCardCompComponent;
  let fixture: ComponentFixture<MovieCardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
