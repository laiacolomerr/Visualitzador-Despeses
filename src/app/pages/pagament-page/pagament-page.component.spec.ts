import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentPageComponent } from './pagament-page.component';

describe('PagamentPageComponent', () => {
  let component: PagamentPageComponent;
  let fixture: ComponentFixture<PagamentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
