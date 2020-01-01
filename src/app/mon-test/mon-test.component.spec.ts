import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonTestComponent } from './mon-test.component';

describe('MonTestComponent', () => {
  let component: MonTestComponent;
  let fixture: ComponentFixture<MonTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
