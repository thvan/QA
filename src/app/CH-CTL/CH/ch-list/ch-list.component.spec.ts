import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHLISTComponent } from './ch-list.component';

describe('CHLISTComponent', () => {
  let component: CHLISTComponent;
  let fixture: ComponentFixture<CHLISTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHLISTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
