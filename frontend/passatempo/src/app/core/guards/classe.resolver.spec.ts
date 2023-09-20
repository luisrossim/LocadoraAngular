import { TestBed } from '@angular/core/testing';
import { classeResolver } from './classe.resolver';

describe('AtorResolver', () => {
  let resolver: classeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(classeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
