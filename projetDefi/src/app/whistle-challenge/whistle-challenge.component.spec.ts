import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhistleChallengeComponent } from './whistle-challenge.component';

describe('WhistleChallengeComponent', () => {
  let component: WhistleChallengeComponent;
  let fixture: ComponentFixture<WhistleChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhistleChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhistleChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
