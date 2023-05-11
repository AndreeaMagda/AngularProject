import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceToVisitComponent } from './place-to-visit.component';

describe('PlaceToVisitComponent', () => {
  let component: PlaceToVisitComponent;
  let fixture: ComponentFixture<PlaceToVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceToVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceToVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
