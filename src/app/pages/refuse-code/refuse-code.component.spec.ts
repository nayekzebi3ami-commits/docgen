import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseCodeComponent } from './refuse-code.component';

describe('RefuseCodeComponent', () => {
  let component: RefuseCodeComponent;
  let fixture: ComponentFixture<RefuseCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefuseCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefuseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
