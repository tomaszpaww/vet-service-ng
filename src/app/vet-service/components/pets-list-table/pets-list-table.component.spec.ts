import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsListTableComponent } from './pets-list-table.component';

describe('PetsListTableComponent', () => {
  let component: PetsListTableComponent;
  let fixture: ComponentFixture<PetsListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
