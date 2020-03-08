import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEceComponent } from './about-ece.component';

describe('AboutEceComponent', () => {
  let component: AboutEceComponent;
  let fixture: ComponentFixture<AboutEceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
