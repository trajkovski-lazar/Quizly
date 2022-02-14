import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLecturesComponent } from './header-lectures.component';

describe('HeaderLecturesComponent', () => {
  let component: HeaderLecturesComponent;
  let fixture: ComponentFixture<HeaderLecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLecturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
