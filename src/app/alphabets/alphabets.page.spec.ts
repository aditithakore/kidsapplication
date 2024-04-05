import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphabetsPage } from './alphabets.page';

describe('AlphabetsPage', () => {
  let component: AlphabetsPage;
  let fixture: ComponentFixture<AlphabetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlphabetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
