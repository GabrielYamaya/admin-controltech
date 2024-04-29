import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentSuccessfulDialogComponent } from './login-component-successful-dialog.component';

describe('LoginComponentSuccessfulDialogComponent', () => {
  let component: LoginComponentSuccessfulDialogComponent;
  let fixture: ComponentFixture<LoginComponentSuccessfulDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponentSuccessfulDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponentSuccessfulDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
