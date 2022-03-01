import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FongiComponent } from './fongi.component';

describe('FongiComponent', () => {
  let component: FongiComponent;
  let fixture: ComponentFixture<FongiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FongiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FongiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
