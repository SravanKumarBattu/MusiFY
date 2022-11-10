import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewplaylistComponent } from './newplaylist.component';

describe('NewplaylistComponent', () => {
  let component: NewplaylistComponent;
  let fixture: ComponentFixture<NewplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewplaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
