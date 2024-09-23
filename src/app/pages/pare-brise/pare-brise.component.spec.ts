import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PareBriseComponent } from './pare-brise.component';

describe('PareBriseComponent', () => {
  let component: PareBriseComponent;
  let fixture: ComponentFixture<PareBriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PareBriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PareBriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
