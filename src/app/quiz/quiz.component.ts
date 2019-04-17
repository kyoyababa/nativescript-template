import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

import * as QuizService from './quiz.service';
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
  quizImage = '';
  answerSelections: Array<Country> = Array(4);
  answerImageSelections: Array<Country> = Array(4);
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
    const selectedQuizPattern = QuizService.selectedQuizPattern;
    const correctCountry = DatabaseHandler.getRandomCountry();
    const wrongCountries = DatabaseHandler.getSimilarCountries(correctCountry);

    switch (selectedQuizPattern) {
      case 'countryToCapital':
        this.quizText = QuizTextGenerator.countryToCapital(correctCountry);
        this.answerSelections = DatabaseHandler.fisherYatesShuffle(QuizAnswerGenerator.setAnswers(correctCountry, wrongCountries));
        break;

      case 'capitalToCountry':
        this.quizText = QuizTextGenerator.capitalToCountry(correctCountry);
        this.answerSelections = DatabaseHandler.fisherYatesShuffle(QuizAnswerGenerator.setAnswers(correctCountry, wrongCountries));
        break;

      case 'countryToFlag':
        this.quizText = QuizTextGenerator.countryToFlag(correctCountry);
        this.answerImageSelections = DatabaseHandler.fisherYatesShuffle(QuizAnswerGenerator.setAnswers(correctCountry, wrongCountries));
        break;

      case 'flagToCountry':
        this.quizText = QuizTextGenerator.flagToCountry(correctCountry);
        this.quizImage = QuizService.getQuizImage(correctCountry);
        break;
    }
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }

  getFlagUrl(answer: Country): string {
    return QuizService.getQuizImage(answer);
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
