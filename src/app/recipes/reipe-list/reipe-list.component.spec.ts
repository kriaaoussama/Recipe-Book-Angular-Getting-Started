import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReipeListComponent } from './reipe-list.component';

describe('ReipeListComponent', () => {
  let component: ReipeListComponent;
  let fixture: ComponentFixture<ReipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
