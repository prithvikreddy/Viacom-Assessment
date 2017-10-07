import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTvCompComponent } from './logo-tv-comp.component';

describe('LogoTvCompComponent', () => {
  let component: LogoTvCompComponent;
  let fixture: ComponentFixture<LogoTvCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoTvCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoTvCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
