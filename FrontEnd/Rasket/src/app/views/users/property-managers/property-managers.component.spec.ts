import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyManagersComponent } from './property-managers.component';

describe('PropertyManagersComponent', () => {
  let component: PropertyManagersComponent;
  let fixture: ComponentFixture<PropertyManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyManagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
