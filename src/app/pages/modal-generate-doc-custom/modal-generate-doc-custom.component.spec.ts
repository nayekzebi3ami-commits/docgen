import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGenerateDocCustomComponent } from './modal-generate-doc-custom.component';

describe('ModalGenerateDocCustomComponent', () => {
  let component: ModalGenerateDocCustomComponent;
  let fixture: ComponentFixture<ModalGenerateDocCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalGenerateDocCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGenerateDocCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
