import { Country } from '../services/quiz-text-generator';

const quizPatterns = [
  // 'countryToCapital',
  // 'capitalToCountry',
  'countryToFlag'
];

export const selectedQuizPattern = quizPatterns[Math.floor(Math.random() * quizPatterns.length)];

export function getQuizImage(country: Country): string {
  return `~/app/images/flags/${country.countryCode}@3x.png`;
}
