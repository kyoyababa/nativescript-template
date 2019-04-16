import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

import { Country } from '../services/quiz-text-generator';
import * as DatabaseHandler from '../database/database.handler';
import * as QuizTextGenerator from '../services/quiz-text-generator';
import * as QuizAnswerGenerator from '../services/quiz-answer-generator';


@Component({
  selector: "app-quiz",
  templateUrl: './app/quiz/quiz.component.html',
  styleUrls: ['./app/quiz/quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuizNumber = 1;
  private country: Country | undefined;
  quizText: string | undefined;
  answerSelections: Array<Country> = Array(4);

  constructor(
  ) {
  }

  ngOnInit() {
    this.setQuizAndAnswerSelections();
  }

  ngAfterViewInit() {
  }

  private setQuizAndAnswerSelections(): void {
    const correctCountry = DatabaseHandler.getRandomCountry();
    const wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry)
    this.quizText = QuizTextGenerator.countryToCapital(correctCountry);
    this.answerSelections = DatabaseHandler.fisherYatesShuffle(QuizAnswerGenerator.countryToCapital(correctCountry, wrongCountries));
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }
}
