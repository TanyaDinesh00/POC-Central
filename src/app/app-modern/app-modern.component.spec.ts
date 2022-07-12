import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModernComponent } from './app-modern.component';

describe('AppModernComponent', () => {
  let component: AppModernComponent;
  let fixture: ComponentFixture<AppModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppModernComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
