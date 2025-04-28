import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtcdComponent } from './ltcd.component';

describe('LtcdComponent', () => {
  let component: LtcdComponent;
  let fixture: ComponentFixture<LtcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtcdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
