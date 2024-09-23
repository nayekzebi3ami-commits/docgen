import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraventionsComponent } from './contraventions.component';

describe('ContraventionsComponent', () => {
  let component: ContraventionsComponent;
  let fixture: ComponentFixture<ContraventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContraventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
