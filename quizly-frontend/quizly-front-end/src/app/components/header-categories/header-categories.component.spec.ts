import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCategoriesComponent } from './header-categories.component';

describe('HeaderCategoriesComponent', () => {
  let component: HeaderCategoriesComponent;
  let fixture: ComponentFixture<HeaderCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
