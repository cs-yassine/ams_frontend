import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmployers } from './liste-employers';

describe('ListeEmployers', () => {
  let component: ListeEmployers;
  let fixture: ComponentFixture<ListeEmployers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeEmployers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmployers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
