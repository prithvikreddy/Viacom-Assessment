import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewCompComponent } from './right-view-comp.component';

describe('RightViewCompComponent', () => {
  let component: RightViewCompComponent;
  let fixture: ComponentFixture<RightViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
