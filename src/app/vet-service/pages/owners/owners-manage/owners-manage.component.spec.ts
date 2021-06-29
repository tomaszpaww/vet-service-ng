import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersManageComponent } from './owners-manage.component';

describe('OwnersManageComponent', () => {
  let component: OwnersManageComponent;
  let fixture: ComponentFixture<OwnersManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
