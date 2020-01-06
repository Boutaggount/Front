import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandsComponent } from './mes-demands.component';

describe('MesDemandsComponent', () => {
  let component: MesDemandsComponent;
  let fixture: ComponentFixture<MesDemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDemandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
