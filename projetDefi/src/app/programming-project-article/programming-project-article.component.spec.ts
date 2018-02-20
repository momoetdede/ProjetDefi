import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingProjectArticleComponent } from './programming-project-article.component';

describe('ProgrammingProjectArticleComponent', () => {
  let component: ProgrammingProjectArticleComponent;
  let fixture: ComponentFixture<ProgrammingProjectArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingProjectArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingProjectArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
