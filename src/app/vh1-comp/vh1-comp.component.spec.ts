import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VH1CompComponent } from './vh1-comp.component';

describe('VH1CompComponent', () => {
  let component: VH1CompComponent;
  let fixture: ComponentFixture<VH1CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VH1CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VH1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
