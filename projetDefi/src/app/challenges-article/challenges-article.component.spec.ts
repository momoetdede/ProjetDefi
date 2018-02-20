import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesArticleComponent } from './challenges-article.component';

describe('ChallengesArticleComponent', () => {
  let component: ChallengesArticleComponent;
  let fixture: ComponentFixture<ChallengesArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
