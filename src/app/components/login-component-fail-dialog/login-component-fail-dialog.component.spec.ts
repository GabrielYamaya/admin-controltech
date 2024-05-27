import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentFailDialogComponent } from './login-component-fail-dialog.component';

describe('LoginComponentFailDialogComponent', () => {
  let component: LoginComponentFailDialogComponent;
  let fixture: ComponentFixture<LoginComponentFailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponentFailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponentFailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
