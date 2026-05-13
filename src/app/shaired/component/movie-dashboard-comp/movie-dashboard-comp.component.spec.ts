import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashboardCompComponent } from './movie-dashboard-comp.component';

describe('MovieDashboardCompComponent', () => {
  let component: MovieDashboardCompComponent;
  let fixture: ComponentFixture<MovieDashboardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDashboardCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
