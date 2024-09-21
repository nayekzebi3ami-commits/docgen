import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisImpositionComponent } from './avis-imposition.component';

describe('AvisImpositionComponent', () => {
  let component: AvisImpositionComponent;
  let fixture: ComponentFixture<AvisImpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvisImpositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvisImpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
