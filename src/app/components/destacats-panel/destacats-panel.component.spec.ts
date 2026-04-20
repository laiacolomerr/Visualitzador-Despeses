import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacatsPanelComponent } from './destacats-panel.component';

describe('DestacatsPanelComponent', () => {
  let component: DestacatsPanelComponent;
  let fixture: ComponentFixture<DestacatsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestacatsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestacatsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
