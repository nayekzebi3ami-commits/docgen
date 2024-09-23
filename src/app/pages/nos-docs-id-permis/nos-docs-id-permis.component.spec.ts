import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosDocsIdPermisComponent } from './nos-docs-id-permis.component';

describe('NosDocsIdPermisComponent', () => {
  let component: NosDocsIdPermisComponent;
  let fixture: ComponentFixture<NosDocsIdPermisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NosDocsIdPermisComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NosDocsIdPermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
