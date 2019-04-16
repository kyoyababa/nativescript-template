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
  isAnswerSelected = false;
  selectedAnswer: any = null;
  answers = [];

  constructor(
  ) {
  }

  ngOnInit() {
    this.setQuizAndAnswerSelections();
  }

  ngAfterViewInit() {
  }

  private setQuizAndAnswerSelections(): void {
    const quizPatterns = ['countryToCapital', 'capitalToCountry'];

    const correctCountry = DatabaseHandler.getRandomCountry();
    const wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry);

    const selectedQuizPattern = Math.floor(Math.random() * quizPatterns.length);

    if (quizPatterns[selectedQuizPattern] === 'countryToCapital') {
      this.quizText = QuizTextGenerator.countryToCapital(correctCountry);
    } else if (quizPatterns[selectedQuizPattern] === 'capitalToCountry') {
      this.quizText = QuizTextGenerator.capitalToCountry(correctCountry);
    } else {
      throw new Error();
    }

    this.answerSelections = DatabaseHandler.fisherYatesShuffle(QuizAnswerGenerator.setAnswers(correctCountry, wrongCountries));
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }

  judgement(answer: Country): void {
    this.isAnswerSelected = true;
    this.selectedAnswer = answer;
  }

  isCorrect(): boolean {
    return this.selectedAnswer && this.selectedAnswer.isCorrect;
  }

  goToNext(): void {
    this.answers.push({ correct: this.isCorrect() });
    this.isAnswerSelected = false;
    this.selectedAnswer = null;
    this.setQuizAndAnswerSelections();
    this.currentQuizNumber++;
  }
}
