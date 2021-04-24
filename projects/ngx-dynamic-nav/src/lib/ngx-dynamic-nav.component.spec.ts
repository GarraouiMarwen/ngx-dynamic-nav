import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { NgxDynamicNavComponent } from './ngx-dynamic-nav.component';
import {FilterPipe} from './utils/FilterPipe';
import {NgxDynamicNavService} from './ngx-dynamic-nav.service';


describe('NgxNavComponent', () => {
  let component: NgxDynamicNavComponent;
  let fixture: ComponentFixture<NgxDynamicNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDynamicNavComponent, FaIconComponent, FilterPipe ],
      providers: [NgxDynamicNavService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
