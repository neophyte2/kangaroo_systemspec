import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatePositionComponent } from './initiate-position.component';

describe('InitiatePositionComponent', () => {
  let component: InitiatePositionComponent;
  let fixture: ComponentFixture<InitiatePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiatePositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
