import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencasComponent } from './licencas.component';

describe('LicencasComponent', () => {
  let component: LicencasComponent;
  let fixture: ComponentFixture<LicencasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LicencasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicencasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
