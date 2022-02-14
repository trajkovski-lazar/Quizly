import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLectureModalComponent } from './delete-lecture-modal.component';

describe('DeleteLectureModalComponent', () => {
  let component: DeleteLectureModalComponent;
  let fixture: ComponentFixture<DeleteLectureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLectureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLectureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
