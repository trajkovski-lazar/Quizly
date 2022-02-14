import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLectureModalComponent } from './add-lecture-modal.component';

describe('AddLectureModalComponent', () => {
  let component: AddLectureModalComponent;
  let fixture: ComponentFixture<AddLectureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLectureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLectureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
