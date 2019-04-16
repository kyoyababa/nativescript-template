import { Country } from './quiz-text-generator';


export function countryToCapital(country: Country, similarCountries: Array<Country>) {
  const correctAnswer = country.capitalJp;

  return [
    { ...country, isCorrect: true },
    { ...similarCountries[0], isCorrect: false },
    { ...similarCountries[1], isCorrect: false },
    { ...similarCountries[2], isCorrect: false },
  ];
}
