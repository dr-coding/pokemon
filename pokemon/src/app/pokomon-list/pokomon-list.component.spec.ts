import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokomonListComponent } from './pokomon-list.component';

describe('PokomonListComponent', () => {
  let component: PokomonListComponent;
  let fixture: ComponentFixture<PokomonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokomonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokomonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
