import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShapesPage } from './shapes.page';

describe('ShapesPage', () => {
  let component: ShapesPage;
  let fixture: ComponentFixture<ShapesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShapesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
