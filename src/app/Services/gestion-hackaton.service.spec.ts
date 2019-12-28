import { TestBed } from '@angular/core/testing';

import { GestionHackatonService } from './gestion-hackaton.service';

describe('GestionHackatonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionHackatonService = TestBed.get(GestionHackatonService);
    expect(service).toBeTruthy();
  });
});
