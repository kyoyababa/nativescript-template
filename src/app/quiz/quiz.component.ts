import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from 'rxjs';

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
  selectedQuizPattern: I.AnswerSelection | null = null;
  answerSelectionPattern: 'TEXT' | 'IMAGE' | null = null;
  quizText = '';
  quizImage = '';
  answerSelections: Array<I.Country> = Array(4);
  isAnswerSelected = false;
  selectedAnswer: I.AnswerOfCountry | null = null;
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
    this.selectedQuizPattern = QuizService.selectQuizPattern();
    const quizModel = QuizService.getQuizTextAndAnswerSelections(this.selectedQuizPattern);

    this.answerSelectionPattern = quizModel.answerSelectionPattern;
    this.quizImage = <string>quizModel.quizImage;
    this.answerSelections = DatabaseHandler.fisherYatesShuffle(quizModel.answerSelections);

    this.animateQuizText(quizModel.quizText);
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }

  private animateQuizText(quizText: string): void {
    this.quizText = quizText;
    // let currentQuizTextLength = 0;
    // setInterval(() => {
    //   this.quizText = quizText.slice(0, currentQuizTextLength);
    //   if (currentQuizTextLength === quizText.length) return;
    //   currentQuizTextLength++;
    // }, 100);
  }

  getAnswerText(answer: I.AnswerOfCountry): string {
    return QuizService.getAnswerText(answer, <I.AnswerSelection>this.selectedQuizPattern);
  }

  shouldShowAnswerSelectionsPattern(answerSelectionPattern: 'TEXT' | 'IMAGE') {
    return this.answerSelectionPattern === answerSelectionPattern;
  }

  judgement(answer: I.AnswerOfCountry): void {
    if (this.isAnswerSelected) return;

    this.isAnswerSelected = true;
    this.selectedAnswer = answer;
  }

  isCorrect(): boolean {
    return Boolean(this.selectedAnswer && this.selectedAnswer.isCorrect);
  }

  goToNext(): void {
    this.answers.push({ correct: this.isCorrect() });
    this.resetModelsAndStartNextQuiz();
  }

  private resetModelsAndStartNextQuiz(): void {
    this.currentQuizNumber++;
    this.selectedQuizPattern = null;
    this.answerSelectionPattern = null;
    this.quizText = '';
    this.quizImage = '';
    this.answerSelections = Array(4);
    this.isAnswerSelected = false;
    this.selectedAnswer = null;
    this.setQuizAndAnswerSelections();
  }
}
