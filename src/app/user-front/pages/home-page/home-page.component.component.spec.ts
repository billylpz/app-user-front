/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePage.componentComponent } from './home-page.component.component';

describe('HomePage.componentComponent', () => {
  let component: HomePage.componentComponent;
  let fixture: ComponentFixture<HomePage.componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage.componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage.componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
