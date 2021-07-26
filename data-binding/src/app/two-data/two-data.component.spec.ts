import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDataComponent } from './two-data.component';

describe('TwoDataComponent', () => {
  let component: TwoDataComponent;
  let fixture: ComponentFixture<TwoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
