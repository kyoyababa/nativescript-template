import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

import * as QuizService from './quiz.service';
import * as I from '../models/quiz.d';
import * as DatabaseHandler from '../database/database.handler';
import * as QuizTextGenerator from '../services/quiz-text-generator';
import * as QuizAnswerSelectionsGenerator from '../services/quiz-answer-selections-generator';


@Component({
  selector: "app-quiz",
  templateUrl: './app/quiz/quiz.component.html',
  styleUrls: ['./app/quiz/quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuizNumber = 1;
  selectedQuizPattern: I.AnswerSelection;
  quizText: string | undefined;
  quizImage = '';
  answerSelections: Array<I.Country> = Array(4);
  isAnswerSelected = false;
  selectedAnswer: I.AnswerOfCountry = null;
  answers: Array<I.AnswerHistory> = [];

  constructor(
  ) {
  }

  ngOnInit() {
    this.setQuizAndAnswerSelections();
  }

  ngAfterViewInit() {
  }

  private setQuizAndAnswerSelections(): void {
    this.selectedQuizPattern = QuizService.selectedQuizPattern();
    const { quizText, quizImage, answerSelections } = QuizService.getQuizTextAndAnswerSelections(this.selectedQuizPattern);
    this.quizText = quizText;
    this.quizImage = quizImage;
    this.answerSelections = DatabaseHandler.fisherYatesShuffle(answerSelections);
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }

  getAnswerText(answer: I.AnswerOfCountry): string {
    return QuizService.getAnswerText(answer, this.selectedQuizPattern);
  }

  shouldShowTextAnswers() {
    return this.selectedQuizPattern !== 'countryToFlag';
  }

  shouldShowImageAnswers() {
    return this.selectedQuizPattern === 'countryToFlag';
  }

  judgement(answer: I.AnswerOfCountry): void {
    if (this.isAnswerSelected) return;

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
