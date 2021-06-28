import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalsListComponent } from './wild-animals-list.component';

describe('WildAnimalsListComponent', () => {
  let component: WildAnimalsListComponent;
  let fixture: ComponentFixture<WildAnimalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildAnimalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildAnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
