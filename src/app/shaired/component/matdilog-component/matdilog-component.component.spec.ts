import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdilogComponentComponent } from './matdilog-component.component';

describe('MatdilogComponentComponent', () => {
  let component: MatdilogComponentComponent;
  let fixture: ComponentFixture<MatdilogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatdilogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatdilogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
