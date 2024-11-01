import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermServiceComponent } from './term-service.component';

describe('TermServiceComponent', () => {
  let component: TermServiceComponent;
  let fixture: ComponentFixture<TermServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermServiceComponent]
    });
    fixture = TestBed.createComponent(TermServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
