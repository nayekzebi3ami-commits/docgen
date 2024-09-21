import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGenerateDocComponent } from './modal-generate-doc.component';

describe('ModalGenerateDocComponent', () => {
  let component: ModalGenerateDocComponent;
  let fixture: ComponentFixture<ModalGenerateDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalGenerateDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGenerateDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
