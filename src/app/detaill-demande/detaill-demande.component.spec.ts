import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillDemandeComponent } from './detaill-demande.component';

describe('DetaillDemandeComponent', () => {
  let component: DetaillDemandeComponent;
  let fixture: ComponentFixture<DetaillDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
