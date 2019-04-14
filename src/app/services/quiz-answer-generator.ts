// import { Injectable } from '@angular/core';

import { Country } from './quiz-text-generator';
import * as DatabaseHandler from '../database/database.handler';


// @Injectable()
// export class QuizAnswerGenerator {
//   constructor(
//     private databaseHandler: DatabaseHandler
//   ) {}

  export function countryToCapital(country: Country) {
    const correctAnswer = country.capitalJp;
    // const databaseHandler = new DatabaseHandler();
    const wrongAnswers = DatabaseHandler.getSimilarCountries(country);

    return [
      { ...country, isCorrect: true },
      { ...wrongAnswers[0], isCorrect: false },
      { ...wrongAnswers[1], isCorrect: false },
      { ...wrongAnswers[2], isCorrect: false },
    ];
  }
// }
