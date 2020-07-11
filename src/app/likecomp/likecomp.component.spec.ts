import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikecompComponent } from './likecomp.component';

describe('LikecompComponent', () => {
  let component: LikecompComponent;
  let fixture: ComponentFixture<LikecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
