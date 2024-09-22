import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificatifDeDomicileComponent } from './justificatif-de-domicile.component';

describe('JustificatifDeDomicileComponent', () => {
  let component: JustificatifDeDomicileComponent;
  let fixture: ComponentFixture<JustificatifDeDomicileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JustificatifDeDomicileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificatifDeDomicileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
