import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TscComponent } from './tsc.component';

describe('TscComponent', () => {
  let component: TscComponent;
  let fixture: ComponentFixture<TscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
