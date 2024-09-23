import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosChequesComponent } from './nos-cheques.component';

describe('NosChequesComponent', () => {
  let component: NosChequesComponent;
  let fixture: ComponentFixture<NosChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NosChequesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
