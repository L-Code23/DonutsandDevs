import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutItemsComponent } from './donut-items.component';

describe('DonutItemsComponent', () => {
  let component: DonutItemsComponent;
  let fixture: ComponentFixture<DonutItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
