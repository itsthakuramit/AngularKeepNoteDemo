import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteviewerComponent } from './noteviewer.component';

describe('NoteviewerComponent', () => {
  let component: NoteviewerComponent;
  let fixture: ComponentFixture<NoteviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
