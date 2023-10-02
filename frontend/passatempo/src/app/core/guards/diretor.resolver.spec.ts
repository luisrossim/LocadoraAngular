import { TestBed } from '@angular/core/testing';
import { diretorResolver } from './diretor.resolver';

describe('DiretorResolver', () => {
  let resolver: diretorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(diretorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
