import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPagamentsComponent } from './llista-pagaments.component';

describe('LlistaPagamentsComponent', () => {
  let component: LlistaPagamentsComponent;
  let fixture: ComponentFixture<LlistaPagamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaPagamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaPagamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
