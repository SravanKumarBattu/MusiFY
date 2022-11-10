import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtoPlaylistComponent } from './addto-playlist.component';

describe('AddtoPlaylistComponent', () => {
  let component: AddtoPlaylistComponent;
  let fixture: ComponentFixture<AddtoPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtoPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
