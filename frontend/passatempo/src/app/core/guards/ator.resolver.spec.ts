import { TestBed } from '@angular/core/testing';
import { atorResolver } from './ator.resolver';

describe('AtorResolver', () => {
  let resolver: atorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(atorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
