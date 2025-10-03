import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiants } from './list-etudiants';

describe('ListEtudiants', () => {
  let component: ListEtudiants;
  let fixture: ComponentFixture<ListEtudiants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEtudiants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEtudiants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
