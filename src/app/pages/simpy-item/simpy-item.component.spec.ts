import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpyItemComponent } from './simpy-item.component';

describe('SimpyItemComponent', () => {
  let component: SimpyItemComponent;
  let fixture: ComponentFixture<SimpyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
