import { Country } from './quiz-text-generator';


export function setAnswers(correctAnswer: Country, wrongAnswers: Array<Country>) {
  return [
    { ...correctAnswer, isCorrect: true },
    { ...wrongAnswers[0], isCorrect: false },
    { ...wrongAnswers[1], isCorrect: false },
    { ...wrongAnswers[2], isCorrect: false },
  ];
}
