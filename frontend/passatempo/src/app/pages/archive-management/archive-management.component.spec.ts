import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveManagementComponent } from './archive-management.component';

describe('ArchiveManagementComponent', () => {
  let component: ArchiveManagementComponent;
  let fixture: ComponentFixture<ArchiveManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveManagementComponent]
    });
    fixture = TestBed.createComponent(ArchiveManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
