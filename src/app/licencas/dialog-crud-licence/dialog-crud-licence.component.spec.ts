import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrudLicenceComponent } from './dialog-crud-licence.component';

describe('DialogCrudLicenceComponent', () => {
  let component: DialogCrudLicenceComponent;
  let fixture: ComponentFixture<DialogCrudLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCrudLicenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCrudLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
