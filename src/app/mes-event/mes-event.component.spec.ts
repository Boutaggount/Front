import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEventComponent } from './mes-event.component';

describe('MesEventComponent', () => {
  let component: MesEventComponent;
  let fixture: ComponentFixture<MesEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
