import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaotrinhListComponent } from './giaotrinh-list.component';

describe('GiaotrinhListComponent', () => {
  let component: GiaotrinhListComponent;
  let fixture: ComponentFixture<GiaotrinhListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaotrinhListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaotrinhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
