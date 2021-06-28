import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesManageComponent } from './species-manage.component';

describe('SpeciesManageComponent', () => {
  let component: SpeciesManageComponent;
  let fixture: ComponentFixture<SpeciesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
