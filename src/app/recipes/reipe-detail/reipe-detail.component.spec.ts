import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipeDetailComponent } from './reipe-detail.component';

describe('ReipeDetailComponent', () => {
  let component: ReipeDetailComponent;
  let fixture: ComponentFixture<ReipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReipeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
