import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardModalComponent } from './delete-card-modal.component';

describe('DeleteCardModalComponent', () => {
  let component: DeleteCardModalComponent;
  let fixture: ComponentFixture<DeleteCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
