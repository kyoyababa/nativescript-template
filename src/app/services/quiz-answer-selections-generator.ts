import * as I from '../models/quiz.d';

export function getAnswerSelections(correctAnswer: I.Country, wrongAnswers: Array<I.Country>): Array<I.AnswerOfCountry> {
  return [
    { ...correctAnswer, isCorrect: true },
    { ...wrongAnswers[0], isCorrect: false },
    { ...wrongAnswers[1], isCorrect: false },
    { ...wrongAnswers[2], isCorrect: false },
  ];
}
