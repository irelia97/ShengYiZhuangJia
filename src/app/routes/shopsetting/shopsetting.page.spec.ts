import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsettingPage } from './shopsetting.page';

describe('ShopsettingPage', () => {
  let component: ShopsettingPage;
  let fixture: ComponentFixture<ShopsettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
