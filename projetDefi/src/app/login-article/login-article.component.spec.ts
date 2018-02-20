import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArticleComponent } from './login-article.component';

describe('LoginArticleComponent', () => {
  let component: LoginArticleComponent;
  let fixture: ComponentFixture<LoginArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
