import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWeOfferComponent } from './service-we-offer.component';

describe('ServiceWeOfferComponent', () => {
  let component: ServiceWeOfferComponent;
  let fixture: ComponentFixture<ServiceWeOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceWeOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
