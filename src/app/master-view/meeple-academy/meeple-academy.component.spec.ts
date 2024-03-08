import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeepleAcademyComponent } from './meeple-academy.component';

describe('MeepleAcademyComponent', () => {
  let component: MeepleAcademyComponent;
  let fixture: ComponentFixture<MeepleAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeepleAcademyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeepleAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
