import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTVcompComponent } from './mtvcomp.component';

describe('MTVcompComponent', () => {
  let component: MTVcompComponent;
  let fixture: ComponentFixture<MTVcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTVcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTVcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
