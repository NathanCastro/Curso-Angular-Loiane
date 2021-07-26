import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatabindingComponent } from './databinding.component';

describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
