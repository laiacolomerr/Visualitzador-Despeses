import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPagamentsCercaComponent } from './llista-pagaments-cerca.component';

describe('LlistaPagamentsCercaComponent', () => {
  let component: LlistaPagamentsCercaComponent;
  let fixture: ComponentFixture<LlistaPagamentsCercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaPagamentsCercaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaPagamentsCercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
