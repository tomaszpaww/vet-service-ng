import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalsManageComponent } from './wild-animals-manage.component';

describe('WildAnimalsManageComponent', () => {
  let component: WildAnimalsManageComponent;
  let fixture: ComponentFixture<WildAnimalsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildAnimalsManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildAnimalsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
