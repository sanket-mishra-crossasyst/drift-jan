import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListingComponent } from './dashboard-listing.component';

describe('DashboardListingComponent', () => {
  let component: DashboardListingComponent;
  let fixture: ComponentFixture<DashboardListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
