import * as _ from '../util/lodash.util';
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
  displayMode: 'PRETITLE' | 'DISPLAY' | 'RESULT' = 'PRETITLE';
  currentQuizNumber = 1;
  selectedQuizPattern: I.AnswerSelection | null = null;
  answerSelectionPattern: 'TEXT' | 'IMAGE' | null = null;
  quizText = '';
  quizImage = '';
  answerSelections: Array<I.AnswerOfCountry> = [];
  isAnswerSelected = false;
  selectedAnswer: I.AnswerOfCountry | null = null;
  answers: Array<I.AnswerHistory> = [];

  get goToNextButtonLabel(): string {
    return '次へ';
  }

  get resultText(): string {
    return this.isCorrect() ? '正解' : '不正解';
  }

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

    setTimeout(() => {
      this.displayMode = 'DISPLAY';
      this.animateAnswerSelections(_.shuffle(quizModel.answerSelections));

      setTimeout(() => {
        this.animateQuizText(quizModel.quizText);
      }, 100 * 4 + 500);
    }, 1500 + 250);
  }

  getActionBarTitle(): string {
    return `Q.${this.currentQuizNumber}`;
  }

  shouldShow(target: I.DisplayMode): boolean {
    return QuizService.shouldShow(target, this.displayMode);
  }

  private animateAnswerSelections(answerSelections: Array<I.AnswerOfCountry>): void {
    let currentAnswerSelectionNumber = 0;

    const animation = setInterval(() => {
      this.answerSelections.push(answerSelections[currentAnswerSelectionNumber]);

      if (currentAnswerSelectionNumber === answerSelections.length - 1) {
        clearInterval(animation);
      }

      currentAnswerSelectionNumber++;
    }, 100);
  }

  private animateQuizText(quizText: string): void {
    let currentQuizTextLength = 0;

    const animation = setInterval(() => {
      this.quizText = quizText.slice(0, currentQuizTextLength);

      if (currentQuizTextLength === quizText.length || this.isAnswerSelected) {
        clearInterval(animation);
      }

      if (this.isAnswerSelected) {
        this.quizText = quizText;
      }

      currentQuizTextLength++;
    }, 80);
  }

  getAnswerImageSrc(type: 'CORRECT' | 'INCORRECT'): string {
    return QuizService.getAnswerImageSrc(type);
  }

  getAnswerCountDisplay(): string {
    return QuizService.getAnswerCountDisplay([]);
  }

  getAnswerText(answer: I.AnswerOfCountry): string {
    return QuizService.getAnswerText(answer, <I.AnswerSelection>this.selectedQuizPattern);
  }

  shouldShowAnswerSelectionsPattern(answerSelectionPattern: 'TEXT' | 'IMAGE') {
    return this.answerSelectionPattern === answerSelectionPattern;
  }

  isAnswerButtonEnabled(): boolean {
    return !this.isAnswerSelected && this.answerSelections.length === 4;
  }

  isAnswerSelectedAs(answer: I.AnswerOfCountry): boolean {
    if (!answer || !this.selectedAnswer) return false;
    return this.getAnswerText(answer) === this.getAnswerText(this.selectedAnswer);
  }

  judgement(answer: I.AnswerOfCountry): void {
    this.isAnswerSelected = true;
    this.selectedAnswer = answer;
  }

  private isCorrect(): boolean {
    return Boolean(this.selectedAnswer && this.selectedAnswer.isCorrect);
  }

  goToNext(): void {
    this.answers.push({ isCorrect: this.isCorrect() });
    this.resetModelsAndStartNextQuiz();
  }

  private resetModelsAndStartNextQuiz(): void {
    this.currentQuizNumber++;
    this.displayMode = 'PRETITLE'
    this.selectedQuizPattern = null;
    this.answerSelectionPattern = null;
    this.quizText = '';
    this.quizImage = '';
    this.answerSelections = [];
    this.isAnswerSelected = false;
    this.selectedAnswer = null;
    this.setQuizAndAnswerSelections();
  }
}
