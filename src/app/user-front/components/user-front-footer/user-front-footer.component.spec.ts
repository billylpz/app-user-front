/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserFrontFooterComponent } from './user-front-footer.component';

describe('UserFrontFooterComponent', () => {
  let component: UserFrontFooterComponent;
  let fixture: ComponentFixture<UserFrontFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFrontFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFrontFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
