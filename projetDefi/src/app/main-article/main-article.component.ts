import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.css']
})
export class MainArticleComponent implements OnInit {

  categorie = "1. Logement";
  boolConnected=false;
  tailleLogement = ["15","16","17","18","19","20","21","22","23","24"];
  constructor() { }

  ngOnInit() {
  }

}
