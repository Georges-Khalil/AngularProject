import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSpecialComponent } from './films-special.component';

describe('FilmsSpecialComponent', () => {
  let component: FilmsSpecialComponent;
  let fixture: ComponentFixture<FilmsSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsSpecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmsSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
