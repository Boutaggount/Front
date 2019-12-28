import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMembreComponent } from './new-membre.component';

describe('NewMembreComponent', () => {
  let component: NewMembreComponent;
  let fixture: ComponentFixture<NewMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
