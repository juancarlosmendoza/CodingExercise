import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAutorComponent } from './detail-autor.component';

describe('DetailAutorComponent', () => {
  let component: DetailAutorComponent;
  let fixture: ComponentFixture<DetailAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
