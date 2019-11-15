import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaotrinhDetailsComponent } from './giaotrinh-details.component';

describe('GiaotrinhDetailsComponent', () => {
  let component: GiaotrinhDetailsComponent;
  let fixture: ComponentFixture<GiaotrinhDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaotrinhDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaotrinhDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
