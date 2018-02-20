import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programming-project-article',
  templateUrl: './programming-project-article.component.html',
  styleUrls: ['./programming-project-article.component.css']
})
export class ProgrammingProjectArticleComponent implements OnInit {

  ProgrammingProjectFormTitles = ["Category", "Technology", "Subject"];

  ProgrammingProjectCategories = ["Front-End", "Back-End", "Business"];

  ProgrammingProjectFrontTitles = ["A","B","C"];
  ProgrammingProjectBackTitles = ["1","2","3"];
  ProgrammingProjectBusinessTitles = ["1$","2$","3$"];

  constructor() { }

  ngOnInit() {
  }

}
